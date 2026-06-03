`````
Material Market  2.0

# Migration

如何将现有物料迁移从 1.x 至 2.x 版本

`````

在阅读此文档时，我们默认你已经知晓 2.x 物料的相关背景及其变化。如尚不知晓，请阅读此手册第一章节。
我们提供了名为 @ddmc-cli/migration-helper 的 NPM 包进行辅助迁移。迁移工具无法完成全部的迁移流程，但它完成大量重复性的替换工作（主要是组件 Demo 的组织形式），以节省你的时间。

**💡 在开始迁移之前，请确保提交你 Git 工作区的所有未提交内容后继续。「项目变化」部分主要解释了迁移过程更改的项目内容，++请不必立即手动更改++，迁移工具将自动帮你完成里边的大部分内容。**
## 项目变化
#### 需要移除
###### Storybook 相关
1.0 物料使用 Storybook 进行本地开发，在 2.0 将使用内置的开发工具。因此项目内关于 Storybook 的配置以及 Stories 文件都可以被移除：
![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/957fab581cc141e5a8295a4f39d8d42b~tplv-goo7wpa0wc-image.image)
###### 1.0 配置文件
ddmc-cli 2.0 完全重写，1.0 对应的配置文件将不再生效，可以将其从项目中移除。它们包括：

* 根目录中关于 ddmc-cli 和 ddmc-scripts 配置文件：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/6a79c63c3d5c4c6ebd211ed4a8bb7b16~tplv-goo7wpa0wc-image.image)

* 物料 NPM 包内关于 ddmc-scripts 配置文件：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/76432229fad34fe98f89b38ddafacc05~tplv-goo7wpa0wc-image.image)

* 组件目录内用于组件 API 文档自动生成的模板文件：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/1a0c5b89b5a545d6a9eb87eca56373fc~tplv-goo7wpa0wc-image.image)

* 物料元信息描述文件 ddmcMeta.json；

###### 团队站点
如果你的物料项目未使用到「团队站点」功能，可跳过此部分。
我们建议在物料团队页面维护你的全部物料和文档，如果你之前使用了团队站点的功能，已经可以将其从项目中移除。
#### 需要调整
###### Demo 文档
2.0 对于物料文档的组织方式进行了调整，将使用 MDX 书写。因此需要对物料文档的书写形式进行调整：
```JavaScript
/**
 * @file
 * @name AnimateWall
 * @memberOf 信息展示
 * @description 交替渐显动画墙，基于 [gsap](https://github.com/greensock/GSAP) 封装
 * @author yuhan0709
 * @package @ddmc-materials/animate-wall
 */

/**
 * @name 基本用法
 * @description [`Ddmc 官网`](https://ddmc.design/) 的例子，图标的交替渐显。
 */
export { default as Basic } from './basic';

/**
 * @name 自定义元素
 * @description 自定义元素的交替渐显。
 */
export { default as Custom } from './custom';
```

需要将旧有的以 JS 文件书写的 Demo 文档入口，调整为 MDX 的形式：
```Markdown
---
title: AnimateWall
description: 交替渐显动画墙，基于 [gsap](https://github.com/greensock/GSAP) 封装
labels: ['信息展示']
---

## 基本用法

[`Ddmc 官网`](https://ddmc.design/) 的例子，图标的交替渐显。

import Basic from './basic';

<div data-ddmc-demo="Basic">
  <Basic />
</div>

## 自定义元素

import Custom from './custom';

<div data-ddmc-demo="Custom">
  <Custom/>
</div>
```

###### 单元测试
我们移除了单元测试对于 [Enzyme ](https://www.npmjs.com/package/enzyme)的依赖，并只内置了 Jest 依赖，在升级到 ddmc-cli 2.0 之后，旧有的单测逻辑需要作出调整，建议配合 [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) 编写测试用例。
###### 物料 package.json

* 需要移除的：
   * scripts 字段中所有依赖于 ddmc / ddmc-scripts 命令的脚本；

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/09e09fbb1b254c0b9571e724d50dd0b0~tplv-goo7wpa0wc-image.image)

   * umd 字段（2.0 暂不支持构建物料 UMD 产物）；

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/83204328c955420c8185a8c350546e8f~tplv-goo7wpa0wc-image.image)

   * ddmcMeta 字段：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/4e252097d2c04252b3d0a1e7c525851b~tplv-goo7wpa0wc-image.image)

   * dependencies / devDependencies 中关于 Storybook / ddmc-cli / ddmc-scripts 相关的依赖项：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/767cb51136a44745b01fb0add0bf2d7e~tplv-goo7wpa0wc-image.image)

* 根目录 package.json 需要新增的：
   * devDependencies 中新增对于 @ddmc-cli/ddmc 的依赖；
   * scripts 中新增 ddmc-cli 相关的命令；

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/68f251f6c0ac48c3915cbc390c336029~tplv-goo7wpa0wc-image.image)
#### 需要新增

* 工作区配置文件 ddmc.workspace.jsonc；
* 工作区组件环境配置文件 ddmc.env.js；

## 迁移工具
#### 开始迁移
我们建议你先对一个组件进行自动迁移测试。**再次提醒，迁移操作前请保存你的 Git 工作区提交。**
```Bash
 ## 通过以下命令执行迁移工具
 ## --include 接收一个用于指定组件目录的 glob pattern
 npx @ddmc-cli/migration-helper migrate --include="packages/ddmc-site-anchor/src"
```

注意：`--include` 指定的参数需要为组件目录的入口，而非 NPM 包目录。例如，对于多包项目它应当为 `packages/*/src`，对于单包多组件项目它应当为 `components/*`。
![](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/da371f208c1448a3a43c5ce43fbd66c6~tplv-goo7wpa0wc-image.image)

迁移命令将自动完成以上提及的迁移工作的大部分内容，包括：

* 新增工作区配置，移除不再需要的项目文件；
* 调整组件目录，包括组件 Demo 目录和单测目录；
* 多包项目中，调整每个子包的配置；

#### 验证
在完成所有组件迁移后，请全局搜索 `TODO: AUTO MIGRATION CHECK` 文本，这里包含了自动迁移可能产生的风险项，请人工核查。
![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/e36d3e92bd6c493c90c60795add8902f~tplv-goo7wpa0wc-image.image)
请在迁移完成之后，进行以下命令的验证：
```Bash
## 验证组件本地开发预览，Demo 和 API 文档无异常
npx ddmc start

## 验证组件构建流程，检查组件构建产物
npx ddmc build

## 验证组件单测用例，此处可能需要手动适配单测用例
npx ddmc test
```

#### 可能遇到的问题
迁移命令执行完毕后，重新安装项目依赖后执行 `npm start` 命令进入开发预览，你可能遇到以下问题：
###### Webpack 无法解析到当前组件的 NPM 模块
如果你的 Demo 代码中通过 NPM 包名引入了当前组件，需要为 Webpack 配置 `resolve.alias` 字段将其映射到此组件的源码目录。请在根目录 `ddmc.env.js` 中为组件预览的 Webpack 添加如下配置：

![](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/05e0d0fd96904e1b8c5948cbfa1ed582~tplv-goo7wpa0wc-image.image)

你也可以通过类似下边函数，来自动获取工作区内所有组件的 Alias 配置：
```JavaScript
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

function tryCollectPackageWebpackAlias() {
  const packages = glob.sync(path.resolve(__dirname, 'packages/*'));
  const aliasRules = {};
  for (const packageDir of packages) {
    try {
      const packageJson = fs.readJsonSync(path.resolve(packageDir, 'package.json'));
      const [packageSourceDir] = glob.sync(path.resolve(packageDir, '{src,components}'));
      if (packageSourceDir) {
        aliasRules[`${packageJson.name}$`] = packageSourceDir;
      }
    } catch (err) {
      console.error(`ddmc.env.js [tryCollectPackageWebpackAlias]:\n${err.toString()}`);
    }
  }
  return aliasRules;
}
```

###### 组件预览缺少 Ddmc 基础样式
组件样式注入有两种方式：

* 手动在组件的文档预览文件 `index.mdx` 中引入样式文件：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/71057873bdff45b5a79047ea948ea090~tplv-goo7wpa0wc-image.image)

* 通过根目录 `ddmc.env.js` 为组件预览的 Webpack 添加配置，在编译时扩充 MDX 文件内容，来为组件自动注入所需样式：

![图片](https://p9-ddmcsite.byteimg.com/tos-cn-i-goo7wpa0wc/2d3187d7fc0c4ad8a7cf2d4b9e37112f~tplv-goo7wpa0wc-image.image)
###### 组件预览缺少 API 文档
2.0 物料不再需要额外执行 `ddmc docgen` 命令来生成 API 文档。但 API 文档的扫描规则与 1.0 保持一致，需要指定需要扫描的文件，并且遵循特定的 TS 定义书写规则：

* 默认查找 API 文档的文件入口为 `interface.ts`，通过 `ddmc.workspace.jsonc` 中的以下字段修改需要解析的文件：

```JSON
{
  "ddmc.aspect/workspace": {
    "components": {
      // 此部分为所有组件继承的规则
      "extends": {
        "rootDir": "src",
        "entries": {
          "base": "./",
          "main": "index.ts",
          "style": "style/index.ts",
          "preview": "__docs__/index.mdx",
          // 定义所有组件公共的文档解析入口
          "jsdoc": [
            "interface.ts"
          ]
        }
      },
      "members": [
        // 此部分为单个组件的具体规则
        {
          "rootDir": "packages/ddmc-site-anchor/src",
          "name": "SiteAnchor",
          "entries": {
            // 定义某个组件的文档解析入口
            "jsdoc": "index.tsx"
          }
        }
      ]
    }
  }
}
```


* 核查组件 API TS 定义是否符合以下规范：

**只有带** **`@title` 的 interface 或者 type 声明才会被提取。**属性注释有以下可用的 tag：

* `@zh` 属性的中文描述
* `@en` 属性的英文描述 （可选）
* `@defaultValue` 属性的默认值 （可选）
* `@version` 该属性是从哪个版本新增的 （可选）

```TypeScript
/**
 * @title Button (必填，带有 `title` 描述的接口或者类型才会被收集)
 */
interface ButtonProps {
  /**
   * @zh 按钮尺寸 (属性的中文描述)
   * @en Size of Button (可选，属性的英文描述)
   * @version 1.2.0 (可选，新增的属性在哪个版本开始支持)
   * @defaultValue 'default' (可选，属性的默认值)
   */
  size?: 'mini' | 'small' | 'default' | 'large';
}
```

###### 指定物料归属团队和作者
请在 `ddmc.workspace.jsonc` 中配置物料所属的团队 ID 和作者。
```JSON
{
  "ddmc.aspect/workspace": {
    "components": {
      // 此部分为所有组件继承的规则
      "extends": {
        "rootDir": "src",
        // 指定物料的归属团队 ID
        "group": 1,
        // 指定物料作者，内网对应员工邮箱前缀
        "author": "misterluffy"
      },
      "members": [
        // 此部分为单个组件的具体规则
      ]
    }
  }
}
```

## 流程变化
#### 构建流程
迁移至 2.0 之后，构建将自动针对 `ddmc.workspace.jsonc` 中配置的所有组件生效。因此在发版之前，请执行全量的 `npx ddmc build` 以构建全部组件；
#### 文档同步
💡 **物料同步前，内网用户需要通过** **`npx ddmc host ddmc.bytedance.net` 将同步地址切换为内网。**
2.0 之后我们将物料预览文档独立于 NPM 单独维护，这允许你不发布新的 NPM 版本直接更新文档。通过以下步骤更新物料文档：
```Bash
## 完成文档调整后，重新构建组件预览文档
## 可指定组件名构建特定组件 ddmc build Button
ddmc build

## 将新的组件预览文档同步至物料平台
## 可指定组件名同步特定组件 ddmc sync Button
ddmc sync
```

