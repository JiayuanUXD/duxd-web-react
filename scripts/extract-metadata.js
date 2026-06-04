const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../components');
const outputPath = path.resolve(__dirname, '../api/component-metadata.json');

const SKIP_DIRS = new Set(['_class', '_hooks', '_util', 'locale', 'style', 'Portal', 'Icon']);

function parseReadmeHeader(content) {
  const headerMatch = content.match(/^`{3,}\n([\s\S]*?)\n`{3,}/);
  if (!headerMatch) return { category: '', name: '', description: '' };

  const lines = headerMatch[1].trim().split('\n');
  const category = (lines[0] || '').trim();
  const titleLine = lines.find((l) => l.startsWith('# ')) || '';
  const name = titleLine.replace(/^#\s*/, '').trim();
  const descLines = lines.slice(lines.indexOf(titleLine) + 1).filter((l) => l.trim());
  const description = descLines.join(' ').trim();

  return { category, name, description };
}

function parseApiTable(content) {
  const sections = [];
  const apiStart = content.indexOf('## API');
  if (apiStart === -1) return sections;

  const apiContent = content.slice(apiStart);
  const sectionRegex = /### (.+)\n\n\|[^\n]+\|\n\|[-| ]+\|\n((?:\|[^\n]+\|\n?)*)/g;
  let match;

  while ((match = sectionRegex.exec(apiContent)) !== null) {
    const sectionName = match[1].trim();
    const rows = match[2].trim().split('\n').filter(Boolean);
    const props = [];

    for (const row of rows) {
      const cells = row
        .split('|')
        .filter((c) => c !== '')
        .map((c) => c.trim());
      if (cells.length >= 3) {
        props.push({
          name: cells[0],
          description: cells[1],
          type: cells[2],
          defaultValue: cells[3] ? cells[3].replace(/^`|`$/g, '') : '-',
        });
      }
    }

    sections.push({ name: sectionName, props });
  }

  return sections;
}

function parseDemoFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const fm = frontmatterMatch[1];
  const orderMatch = fm.match(/order:\s*(\d+)/);
  const zhTitleMatch = fm.match(/zh-CN:\s*(.+)/);
  const enTitleMatch = fm.match(/en-US:\s*(.+)/);

  const zhDescMatch = content.match(/## zh-CN\n\n([\s\S]*?)(?=\n## en-US|\n```)/);
  const enDescMatch = content.match(/## en-US\n\n([\s\S]*?)(?=\n```)/);

  const codeMatch = content.match(/```(?:js|jsx|tsx?)\n([\s\S]*?)```/);

  return {
    name: path.basename(filePath, '.md'),
    order: orderMatch ? parseInt(orderMatch[1]) : 99,
    title: {
      zh: zhTitleMatch ? zhTitleMatch[1].trim() : '',
      en: enTitleMatch ? enTitleMatch[1].trim() : '',
    },
    description: {
      zh: zhDescMatch ? zhDescMatch[1].trim() : '',
      en: enDescMatch ? enDescMatch[1].trim() : '',
    },
    code: codeMatch ? codeMatch[1].trim() : '',
  };
}

function extractComponent(dirName) {
  const dirPath = path.join(componentsDir, dirName);

  const zhReadme = path.join(dirPath, 'README.zh-CN.md');
  const enReadme = path.join(dirPath, 'README.en-US.md');
  if (!fs.existsSync(zhReadme)) return null;

  const zhContent = fs.readFileSync(zhReadme, 'utf-8');
  const zhHeader = parseReadmeHeader(zhContent);
  const zhSections = parseApiTable(zhContent);

  let enHeader = { category: '', name: '', description: '' };
  let enSections = [];
  if (fs.existsSync(enReadme)) {
    const enContent = fs.readFileSync(enReadme, 'utf-8');
    enHeader = parseReadmeHeader(enContent);
    enSections = parseApiTable(enContent);
  }

  const enPropsMap = {};
  for (const section of enSections) {
    const map = {};
    for (const prop of section.props) {
      map[prop.name] = prop.description;
    }
    enPropsMap[section.name] = map;
  }

  const apiSections = zhSections.map((section) => ({
    name: section.name,
    props: section.props.map((prop) => ({
      ...prop,
      description: {
        zh: prop.description,
        en: enPropsMap[section.name]?.[prop.name] || '',
      },
    })),
  }));

  const demoDir = path.join(dirPath, '__demo__');
  let demos = [];
  if (fs.existsSync(demoDir)) {
    const demoFiles = fs.readdirSync(demoDir).filter((f) => f.endsWith('.md'));
    demos = demoFiles.map((f) => parseDemoFile(path.join(demoDir, f))).filter(Boolean);
    demos.sort((a, b) => a.order - b.order);
  }

  return {
    name: dirName,
    category: {
      zh: zhHeader.category,
      en: enHeader.category,
    },
    title: {
      zh: zhHeader.name,
      en: enHeader.name,
    },
    description: {
      zh: zhHeader.description,
      en: enHeader.description,
    },
    apiSections,
    demos,
  };
}

function main() {
  const dirs = fs.readdirSync(componentsDir).filter((d) => {
    if (SKIP_DIRS.has(d)) return false;
    const stat = fs.statSync(path.join(componentsDir, d));
    return stat.isDirectory();
  });

  const metadata = {};
  for (const dir of dirs) {
    const data = extractComponent(dir);
    if (data) {
      metadata[dir] = data;
    }
  }

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
  console.log(`Extracted ${Object.keys(metadata).length} components to ${outputPath}`);
}

main();
