## 2.66.10

2026-01-23

### 🐛 问题修复

- 修复 `Message` 组件在close上一个消息 messageA 的同时显示新的消息 messageB 时，新的消息 messageB 无法正常显示的问题([#3108](https://github.com/ddmc-design/ddmc-design/pull/3108))

## 2.66.0

2025-04-03

### 🐛 问题修复

- 修复 `Message.useMessage` 在异步执行场景报错的 bug。([#2951](https://github.com/ddmc-design/ddmc-design/pull/2951))

## 2.62.0

2024-04-26

### 🆕 功能升级

- `Message.config` 支持 `closable` 参数([#2659](https://github.com/ddmc-design/ddmc-design/pull/2659))

## 2.58.0

2023-12-29

### 🐛 问题修复

- 修复 `Message` 相同 id 调用，during 不更新问题([#2459](https://github.com/ddmc-design/ddmc-design/pull/2459))

## 2.56.2

2023-12-01

### 🐛 问题修复

- 修复 `Message[method]` 快速触发时，部分节点一直不会消失的 bug.([#2407](https://github.com/ddmc-design/ddmc-design/pull/2407))

## 2.56.1

2023-11-24

### 🐛 问题修复

- 修复 `Message` 组件在设置 `maxCount` 之后更新的逻辑。([#2385](https://github.com/ddmc-design/ddmc-design/pull/2385))

## 2.53.2

2023-09-22

### 🐛 问题修复

- 修复 `Message` 在 RTL 模式开启后无法关闭的问题。([#2250](https://github.com/ddmc-design/ddmc-design/pull/2250))

## 2.53.1

2023-09-15

### 💎 功能优化

- 导出 `MessageHookReturnType` 类型。([#2235](https://github.com/ddmc-design/ddmc-design/pull/2235))

## 2.50.0

2023-06-30

### 🆕 功能升级

- `Message` 支持配置关闭按钮([#2060](https://github.com/ddmc-design/ddmc-design/pull/2060))

## 2.49.1

2023-06-09

### 🐛 问题修复

- 修复 `Message` 组件在特殊场景下 `getContainer` 变化导致组件报错的bug。([#2018](https://github.com/ddmc-design/ddmc-design/pull/2018))

## 2.47.2

2023-05-06

### 🐛 问题修复

- 修复 `Message` 组件在 `useEffect` 里连续调用出现重叠的 bug。([#1954](https://github.com/ddmc-design/ddmc-design/pull/1954))

## 2.43.0

2022-12-23

### 🆕 功能升级

- Message 新增 `transitionTimeout` 属性，完善自定义动画配置。([#1667](https://github.com/ddmc-design/ddmc-design/pull/1667))

## 2.40.0

2022-09-16

### 🆕 功能升级

- `Message` 组件支持 `useMessage` 用法以便读取 `context`([#1401](https://github.com/ddmc-design/ddmc-design/pull/1401))

### 🐛 问题修复

- 修复 `Message` 在设置了 `body { display: 'flex' }` 的页面中无法正常显示的 bug。([#1373](https://github.com/ddmc-design/ddmc-design/pull/1373))

## 2.33.1

2022-05-20

### 🐛 问题修复

- 修复 `Message` 设置 `prefixCls` 后，提示图标前缀未改变的 bug。([#887](https://github.com/ddmc-design/ddmc-design/pull/887))

## 2.18.0

2021-07-02

### 💅 Style

- 修复 `Message` 组件关闭图标没有垂直居中的问题。



## 2.11.0

2021-03-12

### 🐛 Bugfix

- 修复 `Message` 和 `Notifaction` 组件在设置 `maxCount` 的时候，新增的消息出现在底部的 bug。

## 2.1.2

2020-11-13

### 🐛 Bugfix

- 修复更新内容后的 `Message` 无法通过返回值在外部 `close` 的 bug。



## 2.0.0

2020-10-30

### 💎 Optimization

- `Message` `Notification` 动画对齐规范。

