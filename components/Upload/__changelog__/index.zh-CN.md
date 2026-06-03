## 2.63.2

2024-08-08

### 💎 功能优化

- 优化 `Upload` 组件展示错误提示信息报错([#2774](https://github.com/ddmc-design/ddmc-design/pull/2774))
- 优化 `Upload`  组件文件夹上传读取文件判空逻辑，避免边界场景下报错([#2771](https://github.com/ddmc-design/ddmc-design/pull/2771))

## 2.57.0

2023-12-08

### 🐛 问题修复

- 修复 `Upload` 组件在 directory = false 场景下，手动拖拽文件夹到上传区域时会将文件夹作为文件加入列表的问题([#2425](https://github.com/ddmc-design/ddmc-design/pull/2425))

## 2.56.0

2023-11-17

### 🐛 问题修复

- 修复 `Upload` 批量上传时已上传文件状态被覆盖成 init([#2362](https://github.com/ddmc-design/ddmc-design/pull/2362))

## 2.55.0

2023-10-27

### 🆕 功能升级

- `Upload` 支持自定义上传 method([#2297](https://github.com/ddmc-design/ddmc-design/pull/2297))

## 2.53.0

2023-09-08

### 🆕 功能升级

- `Upload` 支持通过 `accept.strict` 设置 `accept` 属性遵循浏览器原生表现，不对文件后缀名进行严格匹配过滤([#2218](https://github.com/ddmc-design/ddmc-design/pull/2218) )
- `Upload`  组件 `onRemove` 方法支持回调参数传入当前文件列表([#2218](https://github.com/ddmc-design/ddmc-design/pull/2218) )
- `Upload`  组件 `onRemove` 方法返回值的 TS 类型修正，`void` 调整为 `void \([#2218](https://github.com/ddmc-design/ddmc-design/pull/2218) )

## 2.45.0

2023-02-17

### 🐛 问题修复

- 修复 `Upload` 组件校验重复 `uid` 警告逻辑异常([#1783](https://github.com/ddmc-design/ddmc-design/pull/1783))

## 2.44.2

2023-02-10

### 🐛 问题修复

- 修复 `Upload` 组件 react 18 下严格模式中批量上传文件不生效 bug。([#1767](https://github.com/ddmc-design/ddmc-design/pull/1767))

## 2.43.0

2022-12-23

### 🐛 问题修复

- 修复 `Upload` 组件在设置 `accept=audio/mp3` 时，mp3 文件无法被正常上传的 bug。([#1669](https://github.com/ddmc-design/ddmc-design/pull/1669))

## 2.42.0

2022-11-25

### 🆕 功能升级

- `Upload` 支持通过 `drag=false` 设置关闭拖拽上传([#1613](https://github.com/ddmc-design/ddmc-design/pull/1613))

## 2.41.3

2022-11-18

### 🐛 问题修复

- 修复 `Upload` 组件对大写后缀名文件错误过滤的 bug。([#1572](https://github.com/ddmc-design/ddmc-design/pull/1572))

## 2.41.0

2022-10-28

### 🆕 功能升级

- `Upload` 组件支持通过 `imagePreview` 属性启用内置的图片预览功能。([#1459](https://github.com/ddmc-design/ddmc-design/pull/1459))
- `Upload` 组件支持 `onDragLeave` 和 `onDragOver` 事件回调([#1459](https://github.com/ddmc-design/ddmc-design/pull/1459))

## 2.38.1

2022-08-05

### 🐛 问题修复

- 修复 `Upload` 组件设置`accept=*`时失效的问题([#1233](https://github.com/ddmc-design/ddmc-design/pull/1233))

## 2.37.0

2022-07-08

### 🆕 功能升级

- `Upload` 组件支持监听 `onDrop` 事件([#1071](https://github.com/ddmc-design/ddmc-design/pull/1071))

### 🐛 问题修复

- 修复 `Upload` 组件在 Windows 系统下可以上传非 `accept` 类型的文件([#1097](https://github.com/ddmc-design/ddmc-design/pull/1097))

## 2.34.0

2022-05-27

### 🆕 功能升级

- `Upload` 组件支持通过 `showUploadList.imageRender` 属性渲染图片。([#925](https://github.com/ddmc-design/ddmc-design/pull/925))
- `Upload` 组件支持通过 `showUploadList.progressRender` 属性渲染上传进度节点。([#925](https://github.com/ddmc-design/ddmc-design/pull/925))
- `Upload` 组件支持传入函数类型的 `children` 渲染触发上传的节点内容。([#925](https://github.com/ddmc-design/ddmc-design/pull/925))

### 💅 样式更新

- `Upload` 组件照片墙模式下图片展示区域新增默认灰色背景。([#925](https://github.com/ddmc-design/ddmc-design/pull/925))

## 2.33.0

2022-05-13

### 🐛 问题修复

- 调整 `Upload` 组件上传请求的参数顺序（`file` 字段最后被添加到 `FormData` 中）。([#857](https://github.com/ddmc-design/ddmc-design/pull/857))

## 2.29.0

2022-02-11

### 🐛 问题修复

- 修复 `Upload` 组件触发两次 `onClick` 的问题([#519](https://github.com/ddmc-design/ddmc-design/pull/519))

## 2.28.2

2022-01-21

### 🐛 问题修复

- 修正 `Upload` 组件的 `webkitdirectory` 属性的类型。([#470](https://github.com/ddmc-design/ddmc-design/pull/470))
- 修复上传组件文件列表项移除按钮的边缘点击不可用的问题([#457](https://github.com/ddmc-design/ddmc-design/pull/457))

## 2.28.0

2022-01-07

### 🆕 功能升级

- `Upload` 组件的 `limit` 参数支持指定超出限制数量后禁用上传节点([#416](https://github.com/ddmc-design/ddmc-design/pull/416))

## 2.27.1

2021-12-24

### 🐛 问题修复

- 修复 `Upload` 组件拖拽上传文件夹的时最多只会上传 100 个文件的 bug 。([#357](https://github.com/ddmc-design/ddmc-design/pull/357))

## 2.27.0

2021-12-17

### 💅 样式更新

- 修复 `Upload` 组件在上传文件列表为空时存在外边距的样式问题([#336](https://github.com/ddmc-design/ddmc-design/pull/336))

## 2.26.2

2021-12-10

### 🐛 问题修复

- 修复 `Upload` 组件设置 `customRequest` 是一个异步函数时，请求无法被终止的 bug 。([#306](https://github.com/ddmc-design/ddmc-design/pull/306))

## 2.26.1

2021-12-07

### 🐛 问题修复

- 修复 `Upload` 组件拖拽上传文件夹不生效的 bug。([#275](https://github.com/ddmc-design/ddmc-design/pull/275))

## 2.26.0

2021-12-03

### 🐛 问题修复

- 修复 `Upload` 组件上传文件夹时，`beforeUpload` 的第二个参数未获取到本次上传的全部文件的 bug。([#252](https://github.com/ddmc-design/ddmc-design/pull/252))

## 2.25.1

2021-11-26

### 🐛 问题修复

- 修复 `Upload` 组件在拖拽移出时，上传节点仍然显示高亮样式的 bug。([#234](https://github.com/ddmc-design/ddmc-design/pull/234))

## 2.23.0

2021-09-27

### 🆎 类型修正

- 修复 `Upload` 组件丢失`RequestOptions`、`UploadRequestReturn`类型定义导出的问题

## 2.20.0

2021-07-30

### 🆕 Feature

- `Upload` 组件支持上传失败时从上传文件的 `response` 字段获取错误信息进行展示。

## 2.19.3

2021-07-23

### 🐛 Bugfix

- 修复 `Upload` 组件 `directory` 属性被设置到 div 标签导致控制台警告的 bug。
- 修复 `Upload` 组件在设置 `listType="picture-card"` 时特殊场景下多张图片上传出现个别图片展示宽度为 0 的问题。

## 2.17.3

2021-06-24

### 💅 Style

- 修复 `Upload` 组件照片墙折行时图片上下未设置间距的问题。

## 2.16.0

2021-05-28

### 🆕 Feature

- `Upload` 组件支持在 `beforeUpload` 方法中返回一个 file 对象，用于处理文件。

## 2.15.0

2021-04-30

### 🐛 Bugfix

- 修复 `Upload` 组件拖拽文件上传时对 Excel 文件类型判断异常的 bug。

## 2.14.0

2021-04-09

### 🐛 Bugfix

- 修复 `Upload` 组件在调用 `customRequest` 时，访问到的父组件的状态不是最新的值的 bug。

## 2.13.2

2021-04-01

### 🐛 Bugfix

- 修复 `Upload` 组件拖拽时出现拖拽中和拖拽完成的样式闪烁问题。
- 修复 `Upload` 组件上传时出现控制台 warning 的 bug。

## 2.11.0

2021-03-12

### 🆕 Feature

- `Upload` 组件支持文件夹上传。

## 2.7.0

2021-01-15

### 💅 Style

- 修复 `Upload` 组件超出 `limit` 限制而隐藏上传节点后出现空白占位的问题。

## 2.2.0

2020-11-20

### 🆕 Feature

- `Upload` 组件拖拽上传时不区分后缀名大小写。



