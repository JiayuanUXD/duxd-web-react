import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const metadata = require('./component-metadata.json');

function createServer() {
  const server = new McpServer({
    name: 'ddmc-design',
    version: '1.0.0',
  });

  server.tool('list_components', '列出所有 DDMC Design 组件名称、分类和简介', {}, async () => {
    const list = Object.values(metadata).map((c) => ({
      name: c.name,
      title: c.title.zh,
      category: c.category.zh,
      description: c.description.zh,
    }));
    return { content: [{ type: 'text', text: JSON.stringify(list, null, 2) }] };
  });

  server.tool(
    'get_component',
    '获取组件的完整 API（Props）和所有示例代码',
    { name: z.string().describe('组件名称，如 Button、Modal、Table') },
    async ({ name }) => {
      const key = Object.keys(metadata).find((k) => k.toLowerCase() === name.toLowerCase());
      if (!key) {
        const available = Object.keys(metadata).join(', ');
        return {
          content: [{ type: 'text', text: `未找到组件 "${name}"。可用组件：${available}` }],
          isError: true,
        };
      }
      const comp = metadata[key];
      const result = {
        name: comp.name,
        title: comp.title.zh,
        description: comp.description.zh,
        api: comp.apiSections.map((s) => ({
          name: s.name,
          props: s.props.map((p) => ({
            name: p.name,
            description: p.description.zh,
            type: p.type,
            defaultValue: p.defaultValue,
          })),
        })),
        demos: comp.demos.map((d) => ({
          name: d.name,
          title: d.title.zh,
          description: d.description.zh,
          code: d.code,
        })),
      };
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  server.tool(
    'search_components',
    '按关键词搜索组件（匹配名称、描述、分类）',
    { query: z.string().describe('搜索关键词') },
    async ({ query }) => {
      const q = query.toLowerCase();
      const results = Object.values(metadata).filter((c) => {
        const fields = [
          c.name,
          c.title.zh,
          c.title.en,
          c.description.zh,
          c.description.en,
          c.category.zh,
          c.category.en,
        ];
        return fields.some((f) => f && f.toLowerCase().includes(q));
      });

      if (results.length === 0) {
        return { content: [{ type: 'text', text: `未找到与 "${query}" 匹配的组件` }] };
      }

      const list = results.map((c) => ({
        name: c.name,
        title: c.title.zh,
        description: c.description.zh,
        propsCount: c.apiSections.reduce((sum, s) => sum + s.props.length, 0),
        demosCount: c.demos.length,
      }));
      return { content: [{ type: 'text', text: JSON.stringify(list, null, 2) }] };
    }
  );

  server.tool(
    'get_demo',
    '获取指定组件的指定示例代码',
    {
      component: z.string().describe('组件名称'),
      demo: z.string().describe('示例名称，如 basic、loading'),
    },
    async ({ component, demo }) => {
      const key = Object.keys(metadata).find((k) => k.toLowerCase() === component.toLowerCase());
      if (!key) {
        return {
          content: [{ type: 'text', text: `未找到组件 "${component}"` }],
          isError: true,
        };
      }

      const comp = metadata[key];
      const d = comp.demos.find((dm) => dm.name.toLowerCase() === demo.toLowerCase());
      if (!d) {
        const available = comp.demos.map((dm) => dm.name).join(', ');
        return {
          content: [
            {
              type: 'text',
              text: `组件 ${key} 没有名为 "${demo}" 的示例。可用示例：${available}`,
            },
          ],
          isError: true,
        };
      }

      const result = {
        component: key,
        demo: d.name,
        title: d.title.zh,
        description: d.description.zh,
        code: d.code,
      };
      return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
    }
  );

  return server;
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, mcp-session-id');
    res.setHeader('Access-Control-Expose-Headers', 'mcp-session-id');
    return res.status(204).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Expose-Headers', 'mcp-session-id');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed. Use POST for MCP requests.' });
  }

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });
  const server = createServer();
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
  await server.close();
}
