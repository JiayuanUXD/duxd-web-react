import React from 'react';
import { fireEvent, render, screen } from '../../../tests/util';
import mountTest from '../../../tests/mountTest';
import componentConfigTest from '../../../tests/componentConfigTest';
import Link from '..';

mountTest(Link);
componentConfigTest(Link, 'Link');

describe('Link', () => {
  it('render item correctly', () => {
    const wrapper = render(<Link href="#" />);
    expect(wrapper.find('.ddmc-link')).toHaveLength(1);
  });

  it('render span  tag correctly', () => {
    const wrapper = render(<Link />);
    expect(wrapper.find('.ddmc-link')).toHaveLength(1);
    expect(wrapper.find('span').item(0).className).toContain('ddmc-link');
  });

  it('render icon correctly', () => {
    const wrapper = render(<Link icon />);
    expect(wrapper.find('.ddmc-icon-link')).toHaveLength(1);
  });

  it('render icon correctly', () => {
    const wrapper = render(<Link icon={<span>hahaha</span>} />);
    expect(wrapper.find('.ddmc-link-icon')[0].innerHTML).toEqual('<span>hahaha</span>');
  });

  it('render hoverable correctly', () => {
    const wrapper = render(<Link hoverable={false} />);
    expect(wrapper.find('.ddmc-link')[0].className).toContain('ddmc-link-hoverless');
  });

  it('link should not trigger onClick', async () => {
    const onClick = jest.fn();
    render(<Link onClick={onClick}>Link</Link>);
    fireEvent.click(await screen.findByText('Link'));
    expect(onClick).toBeCalled();
  });

  it('link disabled should not trigger onClick', async () => {
    const onClick = jest.fn();
    render(
      <Link disabled onClick={onClick}>
        Link
      </Link>
    );
    fireEvent.click(await screen.findByText('Link'));
    expect(onClick).toBeCalledTimes(0);
  });
});
