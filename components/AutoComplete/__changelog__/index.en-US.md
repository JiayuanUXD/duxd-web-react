## 2.64.1

2024-10-28

### 🐛 BugFix

- 修复 `AutoComplete` 下拉框未完全对齐 bug。([#2804](https://github.com/ddmc-design/ddmc-design/pull/2804))

## 2.31.0

2022-03-25

### 🆕 Feature

- `AutoComplete` component's `triggerElement` property allows passing in a function to customize the component trigger node.([#686](https://github.com/ddmc-design/ddmc-design/pull/686))

## 2.25.1

2021-11-26

### 💎 Optimization

- `AutoComplete`'s property `onPressEnter` adds the `activeOption` parameter to distinguish whether there is an active option in the drop-down list when the Enter key is pressed.([#223](https://github.com/ddmc-design/ddmc-design/pull/223))

## 2.15.3

2021-05-21

### 🆎 TypeScript

- Improve the `option` parameter type in the `onChange/onSelect` of the `AutoComplete` component.



## 2.10.0 🏮

2020-02-26

### 🆕 Feature

- Added `inputProps` and `loading` properties to the `AutoComplete` component.

## 2.9.1

2021-02-20

### 🐛 Bugfix

- Fix the bug that the `triggerProps.popupVisible` of the `AutoComplete` component does not take effect.
- Fix the bug that the `onBlur` callback of the `AutoComplete` component is triggered before the drop-down box is hidden.

## 2.8.1

2021-01-28

### 🐛 Bugfix

- Fix the bug that the `onChange` cannot be triggered by clicking the same value option again after the input of `AutoComplete` is changed.

