## 2.51.1

2023-08-04

### 🐛 问题修复

- 修复 `TimePicker` 组件选中默认值没有兼容 `disabledHours` `disabledMinites` `DisabledSeconds` 的 bug。([#2025](https://github.com/ddmc-design/ddmc-design/pull/2025) [@bestlyg](https://github.com/bestlyg))

## 2.49.1

2023-06-09

### 🐛 问题修复

- 修复 `TimePicker` 组件在 `scrollSticky={false}` 时控制台出现 warning 的 bug。([#2023](https://github.com/ddmc-design/ddmc-design/pull/2023) [@bestlyg](https://github.com/bestlyg))

## 2.44.0

2023-01-13

### 🆕 功能升级

- `TimePicker` 组件支持设置 `triggerElement=null` 只使用面板。([#1721](https://github.com/ddmc-design/ddmc-design/pull/1721))

## 2.43.0

2022-12-23

### 🆕 功能升级

- `TimePicker` 支持通过 `prefix` 设置前缀。([#1668](https://github.com/ddmc-design/ddmc-design/pull/1668))

## 2.38.0

2022-07-29

### 🆕 功能升级

- `TimePicker` 组件添加 `triggerElement` 属性支持自定义触发器。([#1199](https://github.com/ddmc-design/ddmc-design/pull/1199))

## 2.32.0

2022-04-15

### 🐛 问题修复

- 修复 `TimePicker` 输入正确时不触发 `onSelect` 事件的 bug。([#769](https://github.com/ddmc-design/ddmc-design/pull/769))

## 2.30.0

2022-03-04

### 🆕 功能升级

- `TimePicker` 组件支持 `utcOffset` 和 `timezone` 来设置 UTC 时间和时区。([#604](https://github.com/ddmc-design/ddmc-design/pull/604))

## 2.27.1

2021-12-24

### 🐛 问题修复

- 修复 `TimePicker` 组件在受控设置为 `undefined` 时，下次 onChange 回调不正确的 bug。([#361](https://github.com/ddmc-design/ddmc-design/pull/361))

## 2.23.0-beta.0

2021-09-17

### 🆕 功能升级

- `TimePicker` 组件新增 `scrollSticky` 参数，设置是否滚动吸附。

## 2.21.0

2021-08-20

### 🆕 功能升级

- `TimePicker.RangePicker` 组件新增 `order` 参数来设置是否自动排序。
- `TimePicker` 组件新增 `showNowBtn` 参数。

## 2.20.1

2021-08-06

### 🐛 Bugfix

- 修复 `TimePicker.RangePicker` 组件的 `onChange` 回调参数没有自动排序的 bug。



## 2.20.0

2021-07-30

### 🆕 Feature

- `TimePicker` 组件支持滚动自动吸附。

## 2.19.3

2021-07-23

### 🐛 Bugfix

- 修复 `TimePicker` 组件开启 `disableConfirm` 之后不会触发 `onChange` 的 bug。

## 2.18.2

2021-07-09

### 🐛 Bugfix

- 修复 `TimePicker` 点击清除按钮会改变弹出层显示状态的bug。

## 2.12.0

2021-03-19

### 🆕 Feature

- `TimePicker` 组件新增 `disableConfirm` 属性，以支持点选时直接确认时间。

### 🐛 Bugfix

- 修复 `TimePicker` 组件在受控模式时，不打开面板直接设置 `value` 不生效的问题。

## 2.7.2

2021-01-19

### 🐛 Bugfix

- 修复 `TimePicker` 组件按需加载缺少样式的 bug。



## 2.5.1

2020-12-31

### 🐛 Bugfix

- 修复 `TimePicker.RangePicker` 值排序之后 `onChange` 中未排序的 bug。
- 修复 `TimePicker.RangePicker` 受控模式不生效的 bug。

## 2.4.1

2020-12-18

### 🐛 Bugfix

- 修复 `TimePicker`的`onChange`只在 `value`发生改变的时候触发。

