## 2.54.0

2023-10-09

### 🆕 功能升级

- `TreeSelect` 组件支持通过 `autoWidth` 属性设置宽度自适应。([#2274](https://github.com/ddmc-design/ddmc-design/pull/2274))

## 2.53.1

2023-09-15

### 💎 功能优化

- 优化 `TreeSelect` 大数据下的性能表现([#2236](https://github.com/ddmc-design/ddmc-design/pull/2236) )

## 2.53.0

2023-09-08

### 🐛 问题修复

- 修复 `TreeSelect` 组件的 `TreeData` 改变，未触发 `renderFormat` 重渲染的 bug。([#2219](https://github.com/ddmc-design/ddmc-design/pull/2219) )

## 2.46.0

2023-03-17

### 🆕 功能升级

- `TreeSelect` 组件支持通过 `renderFormat` 自定义选中节点的回填展示([#1847](https://github.com/ddmc-design/ddmc-design/pull/1847))

### 🐛 问题修复

- 修复 `TreeSelect` 组件在设置 `treeCheckedStrategy=all` 时，点击关闭图标不生效的 bug。([#1849](https://github.com/ddmc-design/ddmc-design/pull/1849))

## 2.44.2

2023-02-10

### 🐛 问题修复

- 修复 `TreeSelect` 单选模式下，选中某一项下拉面板收起后没有触发 `onVisibleChange` 的 bug。([#1763](https://github.com/ddmc-design/ddmc-design/pull/1763))

## 2.41.0

2022-10-28

### 💎 功能优化

- 减少 `TreeSelect` 组件在开启 `retainInputValueWhileSelect` 时重新渲染的次数([#1517](https://github.com/ddmc-design/ddmc-design/pull/1517))

### 🆕 功能升级

- `TreeSelect` 组件支持通过 `addBefore` 属性设置前置标签([#1464](https://github.com/ddmc-design/ddmc-design/pull/1464))

### 🐛 问题修复

- 修复 `TreeSelect` 受控清空 `inputValue` 后无法再次输入相同值的 bug([#1463](https://github.com/ddmc-design/ddmc-design/pull/1463))

## 2.40.0

2022-09-16

### 🆕 功能升级

- `TreeSelect` 组件支持监听 `onKeyDown` 回调。([#1360](https://github.com/ddmc-design/ddmc-design/pull/1360))

## 2.39.0

2022-08-12

### 🆕 功能升级

- `TreeSelect` 新增 `inputValue` 和 `onInputValueChange` 属性。([#1151](https://github.com/ddmc-design/ddmc-design/pull/1151))

## 2.38.0

2022-07-29

### 🐛 问题修复

- 修复 `TreeSelect` 组件在受控模式下开启复选框多选且远程搜索时，已选中项存在 label 未正常展示的 bug。([#1207](https://github.com/ddmc-design/ddmc-design/pull/1207))

## 2.37.0

2022-07-08

### 🆕 功能升级

- `TreeSelect` 组件支持通过对象类型的 `maxTagCount` 属性定制 `maxTag` 内容展示([#1112](https://github.com/ddmc-design/ddmc-design/pull/1112))

## 2.36.0

2022-06-24

### 🐛 问题修复

- 修复 `dragToSort` 在 TreeSelect 中不生效的问题([#1029](https://github.com/ddmc-design/ddmc-design/pull/1029))

## 2.31.0

2022-03-25

### 🆕 功能升级

- `TreeSelect` 组件 `triggerElement` 属性允许传入函数以自定义组件触发节点。([#686](https://github.com/ddmc-design/ddmc-design/pull/686))

## 2.30.0

2022-03-04

### 🐛 问题修复

- 修复 `TreeSelect` 组件在扩展下拉菜单中的输入框无法被聚焦的问题。([#608](https://github.com/ddmc-design/ddmc-design/pull/608))

## 2.29.0

2022-02-11

### 🆕 功能升级

- `TreeSelect` 的 `onChange` 函数新增节点信息参数([#526](https://github.com/ddmc-design/ddmc-design/pull/526))

## 2.23.5

2021-10-29

### 🐛 问题修复

- 修复 `TreeSelect` 组件搜索节点展示不正确的问题。([#74](https://github.com/ddmc-design/ddmc-design/pull/74))

## 2.22.0

2021-09-10

### 🛠 架构改动

- `TreeSelect` 组件文件夹下 `treeSelect.tsx` 更名为 `tree-select.tsx`，有通过文件路径引用的需要注意一下。另外，我们不推荐直接通过文件路径去使用，因为我们无法保证组件内文件名永远不变，如果通过路径也尽量只使用 `index.tsx` 入口文件。

### 💎 优化

- `TreeSelect` 组件下拉列表出现后自动滚动到第一个已选中的节点

## 2.20.1

2021-08-06

### 🐛 Bugfix

- 修复 `TreeSelect` 组件设置 `showSearch={retainInputValueWhileSelect: false}` 不生效的 bug。

## 2.20.0

2021-07-30

### 🐛 Bugfix

- 修复 `TreeSelect` 组件的 `popupVisible` 为 `true` 时，页面其他输入框无法被聚焦的 bug。

## 2.18.2

2021-07-09

### 🐛 Bugfix

- 修复 `TreeSelect` 组件本地搜索结果不正确的bug。

## 2.14.1

2021-04-16

### 🐛 Bugfix

- 修复 `TreeSelect` 的 `onChange` 访问不到外部最新的变量 bug。

## 2.6.0

2021-01-08

### 🐛 Bugfix

- 修复 `TreeSelect` 组件在`treeData`改变，当前选中`value`未更新对应的`title`的问题。

## 2.4.1

2020-12-18

### 🐛 Bugfix

- 修复 `TreeSelect` 组件节点`title`为`ReactNode`时出现崩溃的问题。

## 2.4.0

2020-12-11

### 🐛 Bugfix

- 修复 `TreeSelect` 在打开节点时，子节点被选中的收起状态的节点也会被展开的 bug。
- 修复 `TreeSelect` 在子节点被选中，收起其父节点，再次打开 scrollIntoView 定位有误的 bug。

## 2.3.0

2020-11-27

### 🆕 Feature

- `TreeSelect` 支持 `dropdownRender` 和 `dropdownMenuStyle` 属性，可以自定义扩展下拉菜单。

