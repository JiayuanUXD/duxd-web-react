<div align="center">
  <a href="https://ddmc.design" target="_blank">
    <img alt="Ddmc Design Logo" width="200" src="https://avatars.githubusercontent.com/u/64576149?s=200&v=4"/>
  </a>
</div>
<div align="center">
  <h1>Ddmc Design</h1>
</div>

<div align="center">

A comprehensive React UI components library based on the [Ddmc Design](https://ddmc.design/) system.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ddmc-design/ddmc-design/blob/main/LICENSE)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/ddmc-design/awesome-ddmc)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

https://user-images.githubusercontent.com/19399269/141435899-e453cf75-d50f-4549-b8d0-37daebe46c36.mp4

# Features

## Comprehensive

With more than 60 crafted components that you can use out of the box.

## Customizable theme

Extensive design tokens can be customized to build your own theme. Two ways
of customization are supported:

* [With less-loader](https://ddmc.design/react/docs/theme)
* [Design Lab](https://ddmc.design/themes) - Recommended!

## Reusable custom materials

[Material market](https://ddmc.design/material/) provides a one-stop solution for materials management. Reuse customized modules to make a breakthrough in efficiency.

## TypeScript friendly

All components are written in TypeScript so it's type friendly.


# Installation

Available as an [npm package](https://www.npmjs.com/package/@ddmc-design/web-react)

```bash
// with npm
npm install @ddmc-design/web-react

// with yarn
yarn add @ddmc-design/web-react
```

# Examples

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ddmc-design/web-react';
import '@ddmc-design/web-react/dist/css/ddmc.css';

function App() {
  return (
    <Button type='secondary'>
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
```

# Useful Links

* [Documentation website](https://ddmc.design/)
* [Components documentation](https://ddmc.design/react/docs/overview)
* [Dark mode](https://ddmc.design/react/docs/dark)
* [Theme customization](https://ddmc.design/react/docs/theme)
* [Figma component library](https://www.figma.com/file/M66cTiLXHa4SVyZIlfY5Pb/ddmc-Design-System?node-id=7945%3A44563)
* [Awesome Ddmc](https://github.com/ddmc-design/awesome-ddmc)
* [Bundler Plugins](https://github.com/ddmc-design/ddmc-plugins)

# Ecosystems

| Project               | Description                                             |
| --------------------- | ------------------------------------------------------- |
| [Vue Component Library] | A comprehensive Vue UI components library based on the [Ddmc Design](https://ddmc.design/) system |
| [Design Lab] | A platform to create and manage your themes with ease. |
| [Material Market] | A platform that provides massive high-quality customized materials to greatly boost development efficiency. |
| [Icon Box] | One-stop platform to manage your icons. |
| [Ddmc Pro] | A solution to quickly building applications from scratch. |

[Vue Component Library]: https://ddmc.design/vue/docs/start
[Design Lab]: https://ddmc.design/themes
[Material Market]: https://ddmc.design/material
[Icon Box]: https://ddmc.design/iconbox
[Ddmc Pro]: https://ddmc.design/pro/

# Browser Support

| [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/08095282566ac4e0fd98f89aed934b65.png~tplv-uwbnlip3yd-png.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/40ad73571879dd8d9fd3fd524e0e45a4.png~tplv-uwbnlip3yd-png.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/4f59d35f6d6837b042c8badd95871b1d.png~tplv-uwbnlip3yd-png.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/eee2667f837a9c2ed531805850bf43ec.png~tplv-uwbnlip3yd-png.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/3240334d3967dd263c8f4cdd2d93c525.png~tplv-uwbnlip3yd-png.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/f2454685df95a1a557a61861c5bec256.png~tplv-uwbnlip3yd-png.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| Edge 16| 31| 49 | 31 | 36 | last 2 versions |

# Contributing

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

Thank you to all the people who already contributed to DdmcDesign!

<a href="https://github.com/ddmc-design/ddmc-design/graphs/contributors"><img src="https://contrib.rocks/image?repo=ddmc-design/ddmc-design" /></a>

# License

This project is [MIT licensed](./LICENSE).
