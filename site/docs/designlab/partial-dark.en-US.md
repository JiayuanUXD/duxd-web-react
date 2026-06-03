`````
DesignLab

# Partially apply dark style

This document will tell you how to partially apply the dark style of the component library on the page.
`````

*Auto translate by google.*

## scenes to be used

In the component library, the default dark style is mounted on the body. For details on how to switch, you can check [click here](/react/docs/dark). The specific performance can also be checked by clicking on the upper right corner of the official website to switch the theme.

However, in actual business scenarios, it may appear that part of the page or part of the content of the page needs to be rendered in a dark style (although there are few, but it does exist). At this time, you can change the dark style by modifying the value of the `less` variable `ddmc-theme-tag` Application location to achieve the following effects

![](https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/44b876a885f446958735322a2312e87f~tplv-uwbnlip3yd-image.image)

## Implementation steps

Only the following steps are required to use this function:

### Confirm that the less style file of the component library is referenced in the project, not css

Because you want to modify the `less` variable, the project must compile `less`.

### Configure the value of the override variable `ddmc-theme-tag` in `less-loader`.

For example, configure `ddmc-theme-tag` to `.ddmc-theme`.

```diff
// webpack.config.js
module.exports = {
  rules: [{
    test: /.less$/,
    use: [{
      loader:'style-loader',
    }, {
      loader:'css-loader',
    }, {
      loader:'less-loader',
+ options: {
+ modifyVars: {// The modifyVars configuration in less-loader@6 is moved to lessOptions
+'ddmc-theme-tag':'.ddmc-theme',
+ },
+ javascriptEnabled: true
+ },
    }],
    ...
  }],
  ...
}
```

### Add the class name in the html tag

Add the class name `ddmc-theme` to the body tag, and set the class name `ddmc-theme` and add the attribute `ddmc-theme=dark` on the label that you want to apply the dark style to achieve the following figure Part of the page presents a dark style effect.

p.s: The class name is added to the body because all the css variables are defined on `.ddmc-theme`. If it is not set, there will be a problem of style display.

![](https://p1-ddmc.byteimg.com/tos-cn-i-uwbnlip3yd/645188ba397d408e9a2d40a88fdf97b6~tplv-uwbnlip3yd-image.image)
