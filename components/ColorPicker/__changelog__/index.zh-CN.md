## 2.66.9

2026-01-09

### 🐛 问题修复

- 修复`ColorPicker`组件在RGB输入时，若清空某项值，会导致颜色信息显示为NaN且无法再正常输入的问题([#3096](https://github.com/ddmc-design/ddmc-design/pull/3096))

## 2.66.2

2025-07-15

### 🐛 问题修复

- 修复 RGB 值在清空时导致不可输入的问题([#3017](https://github.com/ddmc-design/ddmc-design/pull/3017))

## 2.66.1

2025-04-09

### 🐛 问题修复

- 修复 `ColorPicker` 组件样式变量引用未加 css 变量前缀的 bug。([#2965](https://github.com/ddmc-design/ddmc-design/pull/2965))

## 2.66.0

2025-04-03

### 🆕 功能升级

- `ColorPicker` 支持 `mode` 来选择单个颜色或渐变色。([#2906](https://github.com/ddmc-design/ddmc-design/pull/2906))

## 2.64.1

2024-10-28

### 🐛 问题修复

- 修复 `ColorPicker` 在弹出画板上按下鼠标后，鼠标移出画板时，会选中外层 DOM 元素([#2824](https://github.com/ddmc-design/ddmc-design/pull/2824))
- 修复 `ConfigProvider` 对 `ColorPicker` 提供的 size 属性不生效 bug。([#2822](https://github.com/ddmc-design/ddmc-design/pull/2822))

## 2.62.0

2024-04-26

### 🆕 功能升级

- `ColorPicker` 组件增加 `onChangeComplete` 和 `renderFooter` 属性([#2633](https://github.com/ddmc-design/ddmc-design/pull/2633))

## 2.60.0

2024-02-23

### 🆕 功能升级

- `ColorPicker` 组件增加对自定义触发元素的支持([#2548](https://github.com/ddmc-design/ddmc-design/pull/2548))

### 🐛 问题修复

- 支持 disabledAlpha([#2538](https://github.com/ddmc-design/ddmc-design/pull/2538))
- 修复 `ColorPicker` 初始化时触发`onChange` 的 bug([#2521](https://github.com/ddmc-design/ddmc-design/pull/2521))
- 修复 `ColorPicker` 按需样式引入缺失的 bug([#2520](https://github.com/ddmc-design/ddmc-design/pull/2520))

## 2.58.0

2023-12-29

### 🆕 功能升级

- 新增 `ColorPicker` 组件([#2383](https://github.com/ddmc-design/ddmc-design/pull/2383))

