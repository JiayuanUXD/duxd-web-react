## 2.62.0

2024-04-26

### 🐛 问题修复

- 修复 `Typography.Ellipsis`  在 safari 下不显示的问题。因环境差异， safari 下为兼容显示([#2662](https://github.com/ddmc-design/ddmc-design/pull/2662))

## 2.61.0

2024-03-15

### 🆕 功能升级

- `Typography.Ellipsis` 支持单行展开按钮的展示([#2596](https://github.com/ddmc-design/ddmc-design/pull/2596))

## 2.60.1

2024-02-28

### 🐛 问题修复

- 修复 `Ellipsis` 组件单行省略失效的问题([#2564](https://github.com/ddmc-design/ddmc-design/pull/2564))

## 2.60.0

2024-02-23

### 🆕 功能升级

- 新增 `Typography.Ellipsis` 组件，支持文本省略功能。([#2525](https://github.com/ddmc-design/ddmc-design/pull/2525))

## 2.59.0

2024-01-19

### 🐛 问题修复

- 修复 `Typography` 组件 `resize` 节流问题([#2488](https://github.com/ddmc-design/ddmc-design/pull/2488))

## 2.57.1

2023-12-15

### 💎 功能优化

- 优化 `Typography` 组件节点长度计算逻辑([#2435](https://github.com/ddmc-design/ddmc-design/pull/2435))

## 2.57.0

2023-12-08

### 🆕 功能升级

- `Typography` 组件支持配置 copy 和 编辑按钮的 `tooltip` 配置([#2428](https://github.com/ddmc-design/ddmc-design/pull/2428))

## 2.51.0

2023-07-28

### 🐛 问题修复

- 修复 `Typography.Title` 切换为编辑状态时字体样式未继承 Title 样式的 bug。([#2109](https://github.com/ddmc-design/ddmc-design/pull/2109) '')
- 修复 `Typography` 切换为编辑状态时用户传入的 `className` 和 `style` 属性丢失的 bug。([#2109](https://github.com/ddmc-design/ddmc-design/pull/2109) '')

## 2.44.2

2023-02-10

### 🐛 问题修复

- 修复 `Typography` 在 `cssEllipsis` 下无法进行自适应省略的 bug([#1766](https://github.com/ddmc-design/ddmc-design/pull/1766))

## 2.41.1

2022-11-04

### 🐛 问题修复

- 修复 `Typography`  组件按需加载样式时未引入 `Tooltip`, `Popover`, `Input`  样式的 bug。([#1541](https://github.com/ddmc-design/ddmc-design/pull/1541))

## 2.39.3

2022-09-02

### 🐛 问题修复

- 修复 `Typography` 组件在折叠计算中会出现抖动情况的 bug([#1366](https://github.com/ddmc-design/ddmc-design/pull/1366))

## 2.37.1

2022-07-14

### 🐛 问题修复

- 修复 `Typography` 组件 `underline` 等不同文本样式下文字省略问题([#1137](https://github.com/ddmc-design/ddmc-design/pull/1137))

## 2.37.0

2022-07-08

### 💅 样式更新

- `Typography` 默认样式添加 `white-space: 'normal'` 以消除父元素对省略影响。([#1109](https://github.com/ddmc-design/ddmc-design/pull/1109))

## 2.34.0

2022-05-27

### 💎 功能优化

- 减少 `Typography` 首次渲染时的计算次数([#935](https://github.com/ddmc-design/ddmc-design/pull/935))

## 2.33.1

2022-05-20

### 🐛 问题修复

- 修复 `Typography` 组件 `展开/折叠` 按钮展示时机错误的bug([#890](https://github.com/ddmc-design/ddmc-design/pull/890))

## 2.33.0

2022-05-13

### 🆕 功能升级

- `Typography` 组件省略场景支持展开受控。([#867](https://github.com/ddmc-design/ddmc-design/pull/867))

### 🐛 问题修复

- 修复`Typography` 组件使用 `code`等行内元素时，折叠出错的 bug。([#866](https://github.com/ddmc-design/ddmc-design/pull/866))

## 2.32.2

2022-04-29

### 🐛 问题修复

- 修复 `Typography` 组件单行省略下 `Tooltip` 失效的bug([#822](https://github.com/ddmc-design/ddmc-design/pull/822))

## 2.32.0

2022-04-15

### 🐛 问题修复

- `Typography` 组件多行省略支持不同样式的文本。([#776](https://github.com/ddmc-design/ddmc-design/pull/776))
- 修复 `Typography` 设置 `white-space` 后无法折叠的bug([#772](https://github.com/ddmc-design/ddmc-design/pull/772))

## 2.31.0

2022-03-25

### 🆕 功能升级

- `Typography` 的 `copyable` 和 `editable` 对应点击回调暴露 `event` 参数。([#684](https://github.com/ddmc-design/ddmc-design/pull/684))

## 2.29.2

2022-02-25

### 🐛 问题修复

- 修复 `Typography` 组件在编辑状态时， `onStart` 入参错误的bug([#555](https://github.com/ddmc-design/ddmc-design/pull/555))

## 2.29.1

2022-02-18

### 💎 优化

- 降低 `Typography` 组件折叠计算后，镜像 `dom` 对自动化测试的影响。([#554](https://github.com/ddmc-design/ddmc-design/pull/554))

## 2.28.1

2022-01-14

### 🐛 问题修复

- 修复 `Typography` 组件在浏览器缩放场景下折叠出错的bug([#441](https://github.com/ddmc-design/ddmc-design/pull/441))

## 2.27.0

2021-12-17

### 🆕 功能升级

- `Typography` 组件的 `onExpand` 回调参数新增 `event` 参数。([#328](https://github.com/ddmc-design/ddmc-design/pull/328))

## 2.26.2

2021-12-10

### 🐛 问题修复

- 修复 `Typography` 在国际化场景下折叠计算结果出错的 bug。([#301](https://github.com/ddmc-design/ddmc-design/pull/301))
- 修复 `Typography` 对包裹多个动态字符串并 `copyable` 时，复制结果出错的 bug。([#301](https://github.com/ddmc-design/ddmc-design/pull/301))

## 2.26.0

2021-12-03

### 🐛 问题修复

- 修复 `Typography`组件设置`showTooltip`后不生效的bug。([#266](https://github.com/ddmc-design/ddmc-design/pull/266))

## 2.25.0

2021-11-19

### 🆕 功能升级

- `Typography` 的 `Ellipsis` 支持 `cssEllipsis`属性，在简单场景下，默认使用 css 进行省略。([#191](https://github.com/ddmc-design/ddmc-design/pull/191))

## 2.24.1

2021-11-12

### 🐛 BugFix

- `Typography` 折叠计算优化，修复单行折叠极端情况下的显示错误。([#152](https://github.com/ddmc-design/ddmc-design/pull/152))

## 2.23.5

2021-10-29

### 🐛 问题修复

- 修复 `Typography` 组件在折叠状态时，使用未更新的变量进行计算的bug([#57](https://github.com/ddmc-design/ddmc-design/pull/57))

## 2.23.1

2021-10-15

### 🐛 问题修复

- 修复 `Typography` 组件对包裹多个动态字符串时会被解析成数组的 bug。
- 修复 `Typography` 组件设置 `ellipsis`后， 在 `editing` 状态时会报错的 bug。
## 2.23.0

2021-09-27

### 💎 优化

- 优化 `Typography` 超出省略情况下计算时机。

### 🐛 问题修复

- 修复 `Typography` 组件对英文字符截断错误导致文字溢出。

## 2.22.0

2021-09-10

### 🐛 问题修复

- 修复 `Typography` 在 `flex` 模式下文字展示宽度计算错误
- 修复 `Typography` 组件 `ellipsis` 受控时，无法重新渲染的 bug
- 修复 `Typography` 组件 `ellipsis` 传入 `onExpand` 时，无法触发调用的 bug
- 修复 `Typography` 窗口 `resize` 时，无法根据适口自动更新 `ellipsis` 状态的 bug

## 2.20.1

2021-08-06

### 🐛 Bugfix

- 修复 `Typography` 组件不支持传入原生 `dom` 属性的 bug。
- 修复 `Typography` 组件第一次渲染时有时候会抖动一下的 bug。

### 🆎 TypeScript

- 修改 `Typography` 组件的 `ellipsis.showTooltip.props` 为非必填



## 2.19.1

2021-07-18

### 🐛 Bugfix

- 修复 `Typography` 组件复制功能在安卓 webview 下不生效的 bug。



## 2.19.0

2021-07-16

### 🐛 Bugfix

- 修复 `Typography` 组件复制功能在安卓 webview 下不生效的 bug。

## 2.14.1

2021-04-16

### 🐛 Bugfix

- 修复 `Typography` 组件复制功能在 Android 系统浏览器上不生效的 bug。

## 2.5.0 🎅🏽

2020-12-25 🎄

### 🐛 Bugfix

- 修复 `Typography` 组件在展开后 `...` 依旧存在的 bug。

## 2.2.1

2020-11-24

### 🐛 Bugfix

- 修复 `Typography` 组件 `editable.onStart` 没有在点击 edit 图标时触发的 bug。

