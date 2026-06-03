## 2.63.1

2024-07-02

### 🐛 问题修复

- 修复 `Avatar` 组件内部 img 元素存在空白的样式问题([#2692](https://github.com/ddmc-design/ddmc-design/pull/2692))

## 2.45.1

2023-03-01

### 💎 功能优化

- 优化 `Avatar` 子节点类型判断逻辑([#1813](https://github.com/ddmc-design/ddmc-design/pull/1813))

## 2.25.1

2021-11-26

### 🐛 问题修复

- 修复 `Avatar.Group` 未设置 `size` 属性时，头像间距未设置的样式问题。([#220](https://github.com/ddmc-design/ddmc-design/pull/220))

## 2.24.0

2021-11-05

### 🐛 问题修复

- 修复 `Avatar` 组件设置 `maxCount = 0` 时头像全部展示的问题。([#89](https://github.com/ddmc-design/ddmc-design/pull/89))

## 2.15.3

2021-05-21

### 💅 Style

- `Avatar` 组件通过 css 配置默认尺寸，便于风格配置平台使用。



## 2.12.0

2021-03-19

### 🐛 Bugfix

- 修复 `Avatar` 组件内部文件循环引用的问题。

### 💅 Style

- 调低 `Avatar` 组件中使用到的 `z-index` 属性的数值。

## 2.6.0

2021-01-08

### 🐛 Bugfix

- 修复 `Avatar.Group` 在多层嵌套下表现不正常的问题。

## 2.4.1

2020-12-18

### 💅 Style

- 调整 `Avatar.Group` 组件设置 `maxCount`时，显示数字的头像的`cursor`属性为`default`。

## 2.4.0

2020-12-11

### 🆕 Feature

- `Avatar.Group` 增加 `maxCount` 属性限制最多展示的头像数目。



## 2.3.0

2020-11-27

### 🆕 Feature

- `Avatar.Group` 支持设置 `zIndexAscent` 设置头像的 `z-index` 递增。

### 💅 Style

- 修复 `Avatar` 组件和 `Space` 组合使用不能垂直居中的样式问题。

## 2.1.2

2020-11-13

### 🐛 Bugfix

- 修复 `Avatar` 组件 `children` 类型限制太死的问题，修改为除了 `image` 和 `picture` 标签，其他 `children` 都直接渲染。

