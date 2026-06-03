`````
物料平台

# 命令集合

速览 ddmc-cli 和 ddmc-scripts 包含的所有可用命令。
`````

Ddmc 通过 `ddmc-cli` 和 `ddmc-scripts` 提供了 `ddmc` 和 `ddmc-scripts` 两个命令。使用前，请分别安装以下两个 NPM 包：

```
npm install ddmc-cli -g

npm install ddmc-scripts -g
```

你可以执行 `ddmc --help` 和 `ddmc-scripts --help` 快速查看指令用法：

```
$ ddmc --help

        ___                    ____            _
       /   |  ______________  / __ \___  _____(_)___ _____
      / /| | / ___/ ___/ __ \/ / / / _ \/ ___/ / __ `/ __ \
     / ___ |/ /  / /__/ /_/ / /_/ /  __(__  ) / /_/ / / / /
    /_/  |_/_/   \___/\____/_____/\___/____/_/\__, /_/ /_/
                                             /____/

Usage: ddmc [commands] [options]

Options:
  -v, --version                 查看当前版本
  -h, --help                    output usage information

Commands:
  init [options] <projectName>  在当前文件夹创建一个模版项目。
  generate [options]            生成元数据
  publish                       发布到 npm
  sync [options]                同步信息到物料市场
  preview [options]             以本地构建产物预览物料详情页
  login                         SSO 用户登陆
  logout                        退出 SSO 登陆
  whoami                        查看当前用户信息
  group [options]               用户分组的相关操作
  template [options]            物料模板的相关操作
  block                         物料区块相关命令
  help [cmd]                    display help for [cmd]
---------------------------------------------------------------------------------------
如需查看某个子命令，可以使用子命令帮助，如：ddmc sync -h
Examples:
  $ ddmc sync -h
---------------------------------------------------------------------------------------
```

```
$ ddmc-scripts --help

Usage: ddmc-scripts command [options]

Options:
  -V, --version             output the version number
  -h, --help                output usage information

Commands:
  dev:component [options]   build components with watch mode
  dev:art                   copy art template with watch mode
  build:component           build all these sources: es, cjs, dist, icon and css
  build:component:css
  build:component:dist
  build:component:es
  build:component:cjs
  build:art
  dev:site [options]        build your website with watch mode. e.g. ddmc-scripts dev:site --ip 127.0.0.1 --port 9090
  build:site
  build:icon
  docgen [options]          generate document of component. e.g. ddmc-scripts docgen --components Alert,Affix,Button
  test                      A command which contains test:client and test:node, any option you entered will be passed to Jest. e.g. ddmc-scripts test --updateSnapshot
  test:client               Any option you entered will be passed to Jest. e.g. ddmc-scripts test:client --updateSnapshot
  test:node                 Any option you entered will be passed to Jest. e.g. ddmc-scripts test:node --bail
  show:config <configType>  Show your current config for ddmc-scripts. Valid type: babel|style|webpack.component|webpack.site|webpack.icon|jest|docgen
```
