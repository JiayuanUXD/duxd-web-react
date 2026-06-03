`````
Material Market

# Build

Understand the development and construction of material projects.
`````

*Auto translate by google.*

*This article is based on the project created by Ddmc's official material template*

## Component construction

The ddmc-scripts build command has built-in component JS, icons, and style building functions. Normally, you only need to build everything with the following command:

```
ddmc-scripts build:component
```

Through `build:component`, the ES/CommonJS/UMD version of the JS file will be built, and the style file will be packaged. If there is an icon folder in the project, the icon will be built. `build:component` is the sum of all the following commands. Most of the time you don't need to use the following subcommands, but understanding these commands will help you understand the entire project structure:

```bash
# Build the corresponding ES module-tsc
ddmc-scripts build:component:es

# Build CommonJS module-tsc
ddmc-scripts build:component:cjs

# Build UMD output-Webpack
ddmc-scripts build:component:dist

# Style construction-gulp-less
ddmc-scripts build:component:css

# Icon build (if any)-Webpack
ddmc-scripts build:icon
```

## **Writing Demo**

In order to test the function of the component and get started quickly for others, you need to provide at least one demo for your component. You should write these demos in the `/src/demo/` directory. The content of a standard Demo file is as follows:

```jsx
// /src/demo/basic.jsx
import React from'react';
import TooltipButton from'@ddmc-design/rc-hello-ddmc';

export default () => {
  return <TooltipButton title="tooltip title">Demo Basic</TooltipButton>;
};
```

In the Demo entry file, add a material description and a demo description. This information will be extracted and displayed on the material platform.

```javascript
// /src/demo/index.js
/**
 * @file
 * @title The name of the group, for example: EmployeeSelect
 * @memberOf component type, for example: data input
 * @description describes your component
 */

/**
 * @title basic usage
 * @description describe your example
 */
export {default as Basic} from'./basic';
```

You can add multiple Demo files. After adding Demo, you need to add it in the `/src/demo/index.js` entry so that it can be previewed in Storybook. All the demos you write will be extracted into the document before `npm publish`, and will be used for real-time preview of materials.

## **Demo dependency**

Since the material platform takes the form of rendering Demo at runtime, by default you can only introduce the following dependencies in the Demo code, which have been injected into the runtime environment by default:

- react
- react-dom
- react-router-dom
- lodash
- date-fns
- @bytedesign/web-react
- @ddmc-design/web-react
- NPM package corresponding to the material itself

If dependencies other than the above must be introduced to ensure the normal operation of Demo, we provide a special way to meet this demand. Follow the steps below:

1. Create a new `/src/demo/ddmcDemoVendor.js` file, and export the required dependencies from this file.

```javascript
// ddmcDemoVendor.js
export {myDependency} from'@ddmc-design/somelib';
```

2. In the Demo file, import this dependency from `ddmcDemoVendor.js`.

```javascript
// basic.jsx

import Component from'@ddmc-design/my-material';
import {myDependency} from'./ddmcDemoVendor';

export default () => {
  return <Component option={myDependency} />;
};
```

3. Make sure that ddmc-scripts version >= 1.17.1, and the ddmcDemoVendor entry is included in the configuration built by Webpack.

```javascript
// Material construction configuration in Lerna Monorepo template

const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const {webpack} = require('../../../ddmc.scripts.config');

module.exports = (config) => {
  if (webpack) {
    const commonConfig =
      typeof webpack ==='function'
        ? webpack
        : typeof webpack.component ==='function'
        ? webpack.component
        : () => {};
    config = commonConfig(config) || config;
  }

  const entry = {
    ddmc: path.resolve(__dirname,'../src/index.tsx'),
  };
  const demoVendorPath = path.resolve(__dirname,'../src/demo/ddmcDemoVendor.js');

  if (fs.existsSync(demoVendorPath)) {
    entry.ddmcDemoVendor = demoVendorPath;
  }

  return merge(config, {entry });
};
```

## **Preview in development**

In order to quickly view the effect of code modification during development, ddmc-scripts provides the following commands to monitor code changes for automatic construction:

```bash
# Monitoring component code changes-tsc & gulp-less
ddmc-scripts dev:component
```

In the official template project, you also need to combine Storybook to preview and debug components in real time.
