`````
Developer Guide

# Quick Start

Follow the steps below to quickly get started using the component library.
`````

```js:react
import ACCard from '../src/widget/Card';

<ACCard
  title="DdmcPro"
  description="Use DdmcPro to quickly build modern web pages."
  link="https://pro.ddmc.design"
  icon="DdmcPro"
  buttonText="Goto"
/>
```

## Install

**You need to install react >= 16.8 and react-dom >= 16.8 at the same time.**

```bash
// npm
npm i @ddmc-design/web-react

// yarn
yarn add @ddmc-design/web-react
```

### CDN

In addition to installing through npm, you can also directly use CDN resources. We provide umd format code.

* Development: https://unpkg.com/@ddmc-design/web-react@latest/dist/ddmc.development.js
* Production: https://unpkg.com/@ddmc-design/web-react@latest/dist/ddmc.min.js
   * Icon: https://unpkg.com/@ddmc-design/web-react@latest/dist/ddmc-icon.min.js
   * Style: https://unpkg.com/@ddmc-design/web-react@latest/dist/css/ddmc.min.css

However, we do not recommend using CDN, because CDN will download the entire library, which will affect the page loading speed.

## Basic Usage

Take Button component as an example:

```js
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@ddmc-design/web-react";
import "@ddmc-design/web-react/dist/css/ddmc.css";

ReactDOM.render(
  <Button type="primary">Hello Ddmc</Button>,
  document.querySelector("#root")
);
```

```js:react
<div style={{ padding: 20, borderRadius: 4, backgroundColor: 'var(--color-neutral-2)' }}>
  <iframe src="https://codesandbox.io/embed/reverent-voice-v2yzx?fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden' }}
    title="reverent-voice-v2yzx"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
</div>
```

## React 19

Need to be introduced directly at the top of the entry file

```
import '@ddmc-design/web-react/es/_util/react-19-adapter';

```


## Load on Demand

The components of `@ddmc-design/web-react` support `tree shaking` by default, and can be loaded on demand by importing them using `import { Button } from '@ddmc-design/web-react';`.

If `tree-shaking` fails, or if `load style on demand` and `load icon on demand` are required, the following two methods can be used:

### Using the official Ddmc plugin

The plugin functions provided by `Ddmc`'s [official plugin library](https://github.com/ddmc-design/ddmc-plugins) are as follows:

- Component library styles are loaded on demand
- Component library icons are loaded on demand
- Imported theme exported by [Design Lab](https://ddmc.design/themes)
- Icon library replacement for component library

#### Plugin list

> For specific usage, please click the plugin link to view the details page

  - [@ddmc-plugins/unplugin-react 🚧](https://github.com/ddmc-design/ddmc-plugins/blob/main/packages/unplugin-react/README.zh-CN.md) Unplugin for Ddmc react components
  - [@ddmc-plugins/webpack-react](https://github.com/ddmc-design/ddmc-plugins/blob/main/packages/plugin-webpack-react/README.md) webpack plugin for Ddmc react components
  - [@ddmc-plugins/vite-react](https://github.com/ddmc-design/ddmc-plugins/blob/main/packages/plugin-vite-react/README.md) vite plugin for Ddmc react component library
  - [@ddmc-plugins/vite-vue](https://github.com/ddmc-design/ddmc-plugins/blob/main/packages/plugin-vite-vue/README.md) vite plugin for Ddmc vue component library

### Using [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)

1. Installation

```bash
npm i babel-plugin-import -D
```

2. Add configuration

#### Load Component or Style on demand

Add to the babel configuration:

```js
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@ddmc-design/web-react',
      libraryDirectory: 'es',
      camel2DashComponentName: false,
      style: true, // style
    },
  ],
];
```

#### Load Icon on demand

Add to the babel configuration:

```js
plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@ddmc-design/web-react/icon',
      libraryDirectory: 'react-icon',
      camel2DashComponentName: false,
    },
  ],
];
```

## Supported platforms

| [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/08095282566ac4e0fd98f89aed934b65.png~tplv-uwbnlip3yd-png.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/40ad73571879dd8d9fd3fd524e0e45a4.png~tplv-uwbnlip3yd-png.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/4f59d35f6d6837b042c8badd95871b1d.png~tplv-uwbnlip3yd-png.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/eee2667f837a9c2ed531805850bf43ec.png~tplv-uwbnlip3yd-png.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/3240334d3967dd263c8f4cdd2d93c525.png~tplv-uwbnlip3yd-png.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/f2454685df95a1a557a61861c5bec256.png~tplv-uwbnlip3yd-png.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| Edge 16| 31| 49 | 31 | 36 | last 2 versions |

