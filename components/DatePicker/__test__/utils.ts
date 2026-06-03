export function getDateCell(component, panelIndex, cellIndex): Element {
  return component
    .querySelectorAll('.ddmc-picker-body')
    .item(panelIndex)
    .querySelectorAll('.ddmc-picker-cell')
    .item(cellIndex);
}

export function getInput(component, index): Element {
  return component.querySelectorAll('.ddmc-picker-input input').item(index);
}

function getSelectedTime(component, index) {
  return component
    .querySelectorAll('.ddmc-timepicker-list')
    .item(index)
    .querySelector('.ddmc-timepicker-cell-selected').textContent;
}

export function checkTime(component, hour, minute, second) {
  expect(getSelectedTime(component, 0)).toBe(hour);
  expect(getSelectedTime(component, 1)).toBe(minute);
  expect(getSelectedTime(component, 2)).toBe(second);
}

function getSelectedRangeTime(component, dateIndex, index) {
  return component
    .querySelectorAll('.ddmc-panel-date')
    .item(dateIndex)
    .querySelectorAll('.ddmc-timepicker-list')
    .item(index)
    .querySelector('.ddmc-timepicker-cell-selected').textContent;
}

export function checkRangeTime(component, dateIndex, hour, minute, second) {
  expect(getSelectedRangeTime(component, dateIndex, 0)).toBe(hour);
  expect(getSelectedRangeTime(component, dateIndex, 1)).toBe(minute);
  expect(getSelectedRangeTime(component, dateIndex, 2)).toBe(second);
}
