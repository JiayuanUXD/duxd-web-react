# @ddmc/uxd-web-component

> 基于 React 的企业级 UI 组件库，面向 AI 辅助原型开发场景深度优化，与 Claude 等 AI 工具无缝配合生成高保真产品原型。

## 特性

### 开箱即用

60+ 个高质量 React 组件，覆盖表单、表格、导航、数据展示、反馈等绝大部分业务场景。

### AI 友好设计

- **完整的 TypeScript 类型定义**：所有组件均使用 TypeScript 编写，AI 工具可精确理解 Props 接口，生成正确代码
- **语义化组件命名**：Button、Table、Form、Modal 等命名直观，降低 AI 理解成本
- **一致的 API 设计**：统一的事件回调、样式覆盖、数据绑定模式，AI 生成代码更稳定
- **Less 变量主题系统**：设计 Token 体系完整，可通过变量快速切换品牌色、圆角、间距等

### 主题定制

基于 CSS 变量和 Less 变量的双重主题系统，支持：
- 全局品牌色切换（默认品牌色：`#00b42a`）
- 组件级样式覆盖
- 暗黑模式适配

### 与 Claude 配合生成原型

本组件库专为「Claude / AI + 组件库 → 高保真原型」这一工作流优化：

1. **在 Claude 中引用本项目**，直接要求 AI 使用 `@ddmc/uxd-web-component` 生成页面
2. **一次对话生成完整页面**：表格、表单、弹窗、导航等复杂组合，AI 可一次输出
3. **设计一致性**：组件统一的设计语言确保 AI 生成的原型视觉一致

```tsx
// 示例：Claude 一次生成带搜索的数据表格页面
import { Table, Input, Button, Space, Card } from '@ddmc/uxd-web-component';

function UserList() {
  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '邮箱', dataIndex: 'email' },
    { title: '状态', dataIndex: 'status' },
  ];

  return (
    <Card title="用户管理">
      <Space style={{ marginBottom: 16 }}>
        <Input.Search placeholder="搜索用户" style={{ width: 300 }} />
        <Button type="primary">新增</Button>
      </Space>
      <Table columns={columns} data={[]} rowKey="id" />
    </Card>
  );
}
```

## 组件列表

### 通用
Button、Icon、Typography、Link、Divider

### 布局
Grid、Layout、Space、ResizeBox

### 导航
Breadcrumb、Dropdown、Menu、PageHeader、Pagination、Steps、Tabs、Anchor

### 数据录入
AutoComplete、Cascader、Checkbox、ColorPicker、DatePicker、Form、Input、InputNumber、InputTag、Mentions、Radio、Rate、Select、Slider、Switch、TimePicker、Transfer、TreeSelect、Upload、VerificationCode

### 数据展示
Avatar、Badge、Calendar、Card、Carousel、Collapse、Comment、Descriptions、Empty、Image、List、Popover、Statistic、Table、Tag、Timeline、Tooltip、Tree

### 反馈
Alert、Drawer、Message、Modal、Notification、Popconfirm、Progress、Result、Skeleton、Spin、Watermark

### 其他
Affix、BackTop、ConfigProvider

## 安装

```bash
# npm
npm install @ddmc/uxd-web-component --registry=https://npm.ddxq.mobi/

# yarn
yarn add @ddmc/uxd-web-component --registry=https://npm.ddxq.mobi/
```

## 快速开始

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ConfigProvider } from '@ddmc/uxd-web-component';
import '@ddmc/uxd-web-component/dist/ddmc.css';

function App() {
  return (
    <ConfigProvider>
      <Button type="primary">Hello Ddmc</Button>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## 按需加载

配合 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 实现组件按需加载：

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@ddmc/uxd-web-component',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
```

```tsx
// 按需引入，自动加载样式
import { Button, Table } from '@ddmc/uxd-web-component';
```

## 主题定制

通过 CSS 变量覆盖品牌色：

```css
:root {
  --primary-6: #00b42a; /* 默认品牌绿 */
}
```

通过 Less 变量全局定制：

```less
@primary-color: #00b42a;
```

## 本地开发

```bash
# 安装依赖
npm run init

# 启动开发环境
npm start

# Storybook 组件预览
npm run demo

# 构建
npm run build
```

## 仓库地址

- **Git 仓库**：`http://git.ddxq.mobi/liujiayuan/web-react`
- **NPM 仓库**：`https://npm.ddxq.mobi/`

## 技术栈

- React 16+
- TypeScript
- Less
- Storybook (组件预览)
- Jest + @testing-library (单元测试)

## License

MIT
