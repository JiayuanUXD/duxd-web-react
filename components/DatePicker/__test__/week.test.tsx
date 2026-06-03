import React from 'react';
import dayjs from 'dayjs';
import { render, fireEvent } from '../../../tests/util';
import mountTest from '../../../tests/mountTest';
import DatePicker from '..';
import '../../../tests/mockDate';

const WeekPicker = DatePicker.WeekPicker;

mountTest(WeekPicker);

describe('WeekPicker', () => {
  it('dayStartOfWeek', () => {
    const component = render(<WeekPicker />);

    fireEvent.click(component.container.firstElementChild!);

    expect(component.find('.ddmc-picker-week-list-item').item(1).textContent).toBe('一');

    component.rerender(<WeekPicker dayStartOfWeek={0} />);

    expect(component.find('.ddmc-picker-week-list-item').item(1).textContent).toBe('日');
  });

  it('defaultValue', () => {
    const component = render(<WeekPicker defaultValue={dayjs('2020-04-01')} />);

    expect(component.find('.ddmc-picker-start-time')[0].getAttribute('value')).toBe('2020-14周');

    fireEvent.click(component.container.firstElementChild!);

    fireEvent.click(component.find('.ddmc-picker-cell').item(9));
    // 2020-15周

    expect(component.find('.ddmc-picker-start-time')[0].getAttribute('value')).toBe('2020-15周');
  });

  it('today & selected', () => {
    const component = render(<WeekPicker />);

    fireEvent.click(component.container.firstElementChild!);

    expect(component.find('.ddmc-picker-cell-today')[0].textContent).toBe('10');

    expect(component.find('.ddmc-picker-start-time')[0].getAttribute('value')).toBe('');

    fireEvent.click(
      component.find('.ddmc-picker-cell').item(9) // 2020-15周
    );

    expect(component.find('.ddmc-picker-cell-selected').length).toBe(7);
    expect(
      component
        .find('.ddmc-picker-cell-selected')
        .item(0)
        .parentElement?.querySelector('.ddmc-picker-cell-week')?.textContent
    ).toBe('15');
  });

  it('allowClear', () => {
    const onClear = jest.fn();
    const component = render(
      <WeekPicker allowClear onClear={onClear} defaultValue={dayjs('2020-04-01')} />
    );

    fireEvent.click(component.container.firstElementChild!);

    fireEvent.click(component.find('.ddmc-icon-close')[0]);

    expect(component.find('.ddmc-picker-start-time')[0].getAttribute('value')).toBe('');
    expect(onClear.mock.calls.length).toBe(1);
  });
});
