`````
DesignLab

# Use theme package

After the theme is configured and published by the style configuration platform, you can see the npm package published by yourself on npm. The following uses `@ddmc-themes/theme-line` as an example to describe how to use it.
`````

*Auto translate by google.*

## Install

```bash
npm i @ddmc-themes/theme-line
```

## Use in the project

### step1 Remove the reference to the default style of the Ddmc component library

Make sure to remove references to the `@ddmc-design/web-react` component library style files in the project, such as `@ddmc-design/web-react/dist/css/ddmc.css` or `@ddmc-design/web -react/dist/index.less`

### step2 Add configuration items

Confirm whether the project needs to use **load on demand** for the style

#### Need to load styles on demand

Introduce the theme package through the [Ddmc plugins](https://github.com/ddmc-design/ddmc-plugins/blob/main/README.md).

Introduce the `@ddmc-plugins/webpack-react` plugin in the webpack configuration. Specify the theme package name through the `theme` field.

```js
const DdmcWebpackPlugin = require('@ddmc-plugins/webpack-react');

// webpack config
{
  plugins: [
    new DdmcWebpackPlugin({
        theme:'@ddmc-themes/theme-line'
    })
  ]
}
```

#### Don’t need to load on demand? (Choose one of the following two)

1. Introduce the less file directly into the project

`import'@ddmc-themes/theme-line/index.less';`

2. Import css files directly into the project

`import'@ddmc-themes/theme-line/css/ddmc.css';`

When directly importing the css file, you need to check whether it is consistent with the component library version used in the business project. Mainly because the css is packaged according to the specified version of the component library when the theme is released.

## QA

1. #### The style configured using the developer mode does not take effect?

If you use the on-demand loading of styles, please upgrade the DdmcWebpack plugin to the latest version.

If you don’t use styles to load on demand, please check if you have introduced the theme package `index.less` in your project.
