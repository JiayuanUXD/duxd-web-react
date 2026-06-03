## 2.64.1

2024-10-28

### 🐛 问题修复

- 修复 `AutoComplete` 下拉框未完全对齐 bug。([#2804](https://github.com/ddmc-design/ddmc-design/pull/2804))

## 2.31.0

2022-03-25

### 🆕 功能升级

- `AutoComplete` 组件 `triggerElement` 属性允许传入函数以自定义组件触发节点。([#686](https://github.com/ddmc-design/ddmc-design/pull/686))

## 2.25.1

2021-11-26

### 💎 优化

- `AutoComplete` 组件 `onPressEnter` 回调新增 `activeOption` 参数以区分回车键按下时下拉列表是否存在激活的选项。([#223](https://github.com/ddmc-design/ddmc-design/pull/223))

## 2.15.3

2021-05-21

### 🆎 TypeScript

- 完善 `AutoComplete` 组件 `onChange/onSelect` 中的 `option` 参数类型。



## 2.10.0 🏮

2020-02-26

### 🆕 Feature

- `AutoComplete` 组件新增 `inputProps` 和 `loading` 属性。

## 2.9.1

2021-02-20

### 🐛 Bugfix

- 修复 `AutoComplete` 组件 `triggerProps.popupVisible` 未生效的 bug。
- 修复 `AutoComplete` 组件 `onBlur` 回调在下拉框隐藏之前被触发的 bug。

## 2.8.1

2021-01-28

### 🐛 Bugfix

- 修复 `AutoComplete` 输入改变后再次点击同一个 value 的选项，不能触发 `onChange` 的 bug。

## 2.3.0

2020-11-27

### 🐛 Bugfix

- 修复 `AutoComplete` 组件 `onSelect` 回调第二个参数无法获得 `data` 中传入的自定义数据的 bug。

## 2.2.0

2020-11-20

### 🆕 Feature

- `AutoComplete` 组件新增 `virtualListProps` 属性以支持配置虚拟列表。

### 🐛 Bugfix

- 修复 `AutoComplete` 组件无法获得其 `ref` 的 bug。

