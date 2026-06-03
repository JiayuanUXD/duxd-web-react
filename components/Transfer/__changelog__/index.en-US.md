## 2.52.2

2023-09-01

### 💅 Style

- Fix the issue  about `Transfer` list items overflow.([#2198](https://github.com/ddmc-design/ddmc-design/pull/2198))

## 2.51.2

2023-08-11

### 🐛 BugFix

- Fix possible height jitter in `Transfer` when moving list items.([#2136](https://github.com/ddmc-design/ddmc-design/pull/2136))

## 2.49.2

2023-06-16

### 💎 Enhancement

- Optimize the `onChange` callback parameters of the `Transfer` to ensure that the array order of `targetKeys` is consistent with the actual rendering order of the target list.([#2035](https://github.com/ddmc-design/ddmc-design/pull/2035))

## 2.44.2

2023-02-10

### 💅 Style

- Removed `Transfer` interaction style of icon-drag.([#1765](https://github.com/ddmc-design/ddmc-design/pull/1765))

## 2.42.0

2022-11-25

### 🆕 Feature

- `Transfer` adds `virtualListProps` property to support virtual scrolling of the list.([#1610](https://github.com/ddmc-design/ddmc-design/pull/1610))

## 2.41.0

2022-10-28

### 🐛 BugFix

- Fix `Transfer` disabled items can still be draggable when `draggable` is enabled.([#1493](https://github.com/ddmc-design/ddmc-design/pull/1493))

## 2.40.0

2022-09-16

### 🆕 Feature

- The `showSearch / showFooter / searchPlaceholder / pagination / listStyle` properties of `Transfer` support passing in different property values for source/target lists via arrays.([#1389](https://github.com/ddmc-design/ddmc-design/pull/1389))

## 2.37.0

2022-07-08

### 💅 Style

- Fixed an issue where the drag flag of the first item in the list might be obscured by the container when `Transfer` is draggable.([#1103](https://github.com/ddmc-design/ddmc-design/pull/1103))

## 2.36.0

2022-06-24

### 💎 Enhancement

- Optimized the display of the `Transfer` component in `simple` mode for the current number of options in the list.([#1045](https://github.com/ddmc-design/ddmc-design/pull/1045))

## 2.34.0

2022-05-27

### 🐛 BugFix

- Fix the bug that the `onItemSelectAll` method does not work when `Transfer` customizes the list.([#903](https://github.com/ddmc-design/ddmc-design/pull/903))

## 2.30.1

2022-03-11

### 💎 Performance

- When the `Transfer` component clears all, it only operates on the filtered items.([#621](https://github.com/ddmc-design/ddmc-design/pull/621))

## 2.30.0

2022-03-04

### 💎 Optimization

- When the `Transfer` component selects/unselects all, it only operates on the filtered items.([#613](https://github.com/ddmc-design/ddmc-design/pull/613))

## 2.28.0

2022-01-07

### 🆕 Feature

- `Transfer` supports passing `InputProps` to `showSearch`.([#401](https://github.com/ddmc-design/ddmc-design/pull/401))

## 2.21.0

2021-08-20

### 🆕 Feature

- The `simple` property supports passing in the object `{ retainSelectedItems: true }` to retain the selected items in the left panel.

## 2.19.0

2021-07-16

### 🆕 Feature

- Added the `onItemRemove` callback to the `Transfer` component `CustomListProps`.
- The custom head rendering function `titleTexts` of the `Transfer` component adds the `checkbox` parameter.

## 2.18.0

2021-07-02

### 🆕 Feature

- The `Transfer` component `titleTexts` allows to pass in functions to customize the rendering of the title bar.

## 2.13.2

2021-04-01

### 🐛 Bugfix

- Fix the bug that when the `Transfer` component is combined with a paging table, the table will return to the first page every time an item is selected.

## 2.11.0

2021-03-12

### 🆕 Feature

- `Transfer` component `showFooter` supports passing in `ReactNode` custom node.

### 🐛 Bugfix

- Fix the bug that the key of `Transfer.Item` may be duplicated.

