## 2.62.0

2024-04-26

### 🐛 问题修复

- 修复`Slider`组件输入负号触发`onChange`的值为`NaN`的问题。([#2660](https://github.com/ddmc-design/ddmc-design/pull/2660))

## 2.61.0

2024-03-15

### 🆕 功能升级

- `Slider` 支持范围内多点选择([#2594](https://github.com/ddmc-design/ddmc-design/pull/2594))

## 2.56.0

2023-11-17

### 🐛 问题修复

- 修复 `Slider` 组件可能因读取 `undefined` 属性导致的报错问题。([#2369](https://github.com/ddmc-design/ddmc-design/pull/2369))

## 2.41.0

2022-10-28

### 🐛 问题修复

- 修复 Slider 由于父组件更新导致起始范围乱序的 bug。([#1467](https://github.com/ddmc-design/ddmc-design/pull/1467))

## 2.32.0

2022-04-15

### 🆕 功能升级

- `Slider` 组件的 `showInput` 支持传入`InputNumberProps`([#762](https://github.com/ddmc-design/ddmc-design/pull/762))

## 2.31.0

2022-03-25

### 🐛 问题修复

- 修复 `Slider` 的步长设置为小数时计算出错的 bug([#655](https://github.com/ddmc-design/ddmc-design/pull/655))
- 修复 `Slider` 点击非滑动轴区域控制台报错的 bug([#655](https://github.com/ddmc-design/ddmc-design/pull/655))

### 💅 样式更新

- `Slider` 在传入 `marks` 添加标签的场景下始终展示首尾端点([#683](https://github.com/ddmc-design/ddmc-design/pull/683))

## 2.30.0

2022-03-04

### 🆕 功能升级

- Slider 支持按区间分段设置宽度和步长([#600](https://github.com/ddmc-design/ddmc-design/pull/600))

## 2.27.2

2021-12-31

### 🐛 问题修复

- 修复 `Slider` 的 Mark 节点在 DOM 中的渲染顺序可能与 UI 不一致的问题。([#380](https://github.com/ddmc-design/ddmc-design/pull/380))

## 2.26.2

2021-12-10

### 🐛 问题修复

- 修复 `Slider` 组件的 `onAfterChange` 参数没有被更新的 bug。([#305](https://github.com/ddmc-design/ddmc-design/pull/305))

## 2.20.0

2021-07-30

### 🆕 Feature

- `Slider` 组件新增 `reverse` 参数以设置为反向展示。

## 2.14.0

2021-04-09

### 🆕 Feature

- `Slider` 组件支持范围刻度的拖拽。

## 2.9.0 🔥

2021-02-05

### 🐛 Bugfix

- 修复 `Slider` 组件 `tooltipVisible` 受控失效的 bug。

## 2.1.0

2020-11-06

### 🐛 Bugfix

- 修复 `Slider` 组件在拖动结束的时候没有触发 `onAfterChange` 的 bug。

