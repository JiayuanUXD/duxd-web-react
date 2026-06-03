## 2.61.3

2024-04-12

### 🐛 问题修复

- 修复 `Dropdown` 组件的全局 componentConfig 不生效的 bug([#2632](https://github.com/ddmc-design/ddmc-design/pull/2632))

## 2.51.0

2023-07-28

### 🆕 功能升级

- `Dropdown.Button` 允许传入所有的 `DropdownProps`。([#2091](https://github.com/ddmc-design/ddmc-design/pull/2091))

## 2.39.3

2022-09-02

### 💅 样式更新

- 优化 `Dropdown` 组件下拉菜单中 `Menu` 内嵌 `<a/>` 的样式。([#1362](https://github.com/ddmc-design/ddmc-design/pull/1362))

## 2.37.1

2022-07-14

### 🐛 问题修复

- 修复 `disabled` 属性未对 `Dropdown.Button` 的第二个按钮生效的 bug。([#1136](https://github.com/ddmc-design/ddmc-design/pull/1136))

## 2.36.0

2022-06-24

### 💅 样式更新

- 在 `Dropdown` 的菜单项没有子节点时彻底隐藏弹出菜单。([#1043](https://github.com/ddmc-design/ddmc-design/pull/1043))

## 2.34.0

2022-05-27

### 🐛 问题修复

- 修复 `Dropdown` 内的 `Menu` 组件 `onMenuItemClick` 的第三个参数 `keyPath` 缺失的 bug。([#921](https://github.com/ddmc-design/ddmc-design/pull/921))

## 2.33.0

2022-05-13

### 🐛 问题修复

- 修复 `Dropdown` 下拉菜单中的输入框无法被聚焦的 bug。([#856](https://github.com/ddmc-design/ddmc-design/pull/856))

## 2.28.1

2022-01-14

### 💎 优化

- `Dropdown` 为下拉框节点补充 `ddmc-dropdown` 的类名。([#437](https://github.com/ddmc-design/ddmc-design/pull/437))

## 2.28.0

2022-01-07

### 🐛 问题修复

- 修复 `Dropdown` 中的 `Menu` 无法通过 `style` 设置宽度的问题。([#399](https://github.com/ddmc-design/ddmc-design/pull/399))

## 2.25.0

2021-11-19

### 🆕 功能升级

- `Dropdown` 配合 `Menu` 使用时，允许通过 `onClickMenuItem` 的返回值控制菜单点击后是否自动隐藏。([#180](https://github.com/ddmc-design/ddmc-design/pull/180))

## 2.23.0

2021-09-27

### 🐛 问题修复

- 修复了 `Dropdown` 的 `disabled` 属性无法作用在子节点上的bug

## 2.22.0

2021-09-10

### 🆎 类型修正

- `Dropdown` 组件修复了 `droplist` 为必填的问题。

## 2.7.1

2021-01-18

### 🐛 Bugfix

- 修复 `DropDown` 等依赖 `Trigger` 组件的弹出型组件传入 `popupAlign` 多个方向的值，导致定位偏移的 bug。

