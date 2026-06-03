import React from 'react';
import { fireEvent, render } from '../../../tests/util';
import DatePicker from '..';
import { getDateCell, getInput } from './utils';
import '../../../tests/mockDate';

const { RangePicker } = DatePicker;

describe('RangePicker hover', () => {
  it('mode = date', () => {
    const component = render(<RangePicker />);
    fireEvent.click(getInput(component, 0));

    expect(
      component.find('.ddmc-picker')[0].classList.contains('ddmc-picker-focused')
    ).toBeTruthy();

    // 2020-04-06
    fireEvent.click(getDateCell(component, 0, 7).querySelector('.ddmc-picker-date')!);

    expect(getDateCell(component, 0, 7).className).toBe(
      'ddmc-picker-cell ddmc-picker-cell-in-view ddmc-picker-cell-selected ddmc-picker-cell-range-start'
    );

    // 2020-04-08
    fireEvent.mouseEnter(getDateCell(component, 0, 9));

    expect(getDateCell(component, 0, 7).className).toBe(
      'ddmc-picker-cell ddmc-picker-cell-in-view ddmc-picker-cell-selected ddmc-picker-cell-range-start ddmc-picker-cell-in-range'
    );
    expect(getDateCell(component, 0, 9).className).toBe(
      'ddmc-picker-cell ddmc-picker-cell-in-view ddmc-picker-cell-range-end ddmc-picker-cell-in-range'
    );
    expect(component.find('.ddmc-picker-cell-in-range')).toHaveLength(3);

    expect(getInput(component, 0).getAttribute('value')).toBe('2020-04-06');
    expect(getInput(component, 1).getAttribute('value')).toBe('2020-04-08');
    expect(
      getInput(component, 1).parentElement?.classList.contains('ddmc-picker-input-placeholder')
    ).toBeTruthy();

    fireEvent.click(getDateCell(component, 0, 9).querySelector('.ddmc-picker-date')!);

    expect(getInput(component, 0).getAttribute('value')).toBe('2020-04-06');
    expect(getInput(component, 1).getAttribute('value')).toBe('2020-04-08');

    expect(component.find('.ddmc-picker')[0].classList.contains('ddmc-picker-focused')).toBeFalsy();

    // reopen
    fireEvent.click(getInput(component, 1));

    // 2020-04-10
    fireEvent.mouseEnter(getDateCell(component, 0, 11));

    expect(getDateCell(component, 0, 7).className).toBe(
      'ddmc-picker-cell ddmc-picker-cell-in-view ddmc-picker-cell-selected ddmc-picker-cell-range-start ddmc-picker-cell-in-range ddmc-picker-cell-hover-range-start ddmc-picker-cell-hover-in-range'
    );
    expect(getDateCell(component, 0, 9).className).toBe(
      'ddmc-picker-cell ddmc-picker-cell-in-view ddmc-picker-cell-selected ddmc-picker-cell-range-end ddmc-picker-cell-in-range ddmc-picker-cell-hover-in-range ddmc-picker-cell-range-edge-in-hover-range'
    );
    expect(getDateCell(component, 0, 11).className).toBe(
      'ddmc-picker-cell ddmc-picker-cell-in-view ddmc-picker-cell-today ddmc-picker-cell-hover-range-end ddmc-picker-cell-hover-in-range'
    );
    expect(component.find('.ddmc-picker-cell-hover-in-range')).toHaveLength(5);
  });
});
