import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import mountTest from '../../../tests/mountTest';
import componentConfigTest from '../../../tests/componentConfigTest';
import Avatar from '..';
import IconEdit from '../../../icon/react-icon/IconEdit';

const AvatarGroup = Avatar.Group;

let container: HTMLDivElement | null;

mountTest(Avatar);
componentConfigTest(Avatar, 'Avatar');
componentConfigTest(Avatar.Group, 'Avatar.Group');

describe('Avatar', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container && document.body.removeChild(container);
    container = null;
  });

  it('size', () => {
    act(() => {
      ReactDOM.render(<Avatar size={100}>B</Avatar>, container);
    });
    const text = container?.querySelector<HTMLDivElement>('.ddmc-avatar');
    expect(text?.style.width).toBe('100px');
  });

  it('avatar group', () => {
    act(() => {
      ReactDOM.render(
        <AvatarGroup size={60} shape="square" autoFixFontSize={false}>
          <Avatar>B</Avatar>
          <Avatar>Ddmc</Avatar>
          <Avatar>Design</Avatar>
        </AvatarGroup>,
        container
      );
    });

    const component = container?.querySelector('.ddmc-avatar-group');

    expect(component?.childElementCount).toBe(3);

    const avatars = Array.from(container?.querySelectorAll('.ddmc-avatar') || []);

    const texts = ['B', 'Ddmc', 'Design'];

    avatars.forEach((avatar, index) => {
      expect(avatar.classList.contains('ddmc-avatar-square')).toBe(true);
      expect(avatar.getAttribute('style')).toBe(
        `width: 60px; height: 60px; font-size: 30px; z-index: ${
          avatars.length - index
        }; margin-left: ${index === 0 ? 0 : -15}px;`
      );
      expect(avatar?.querySelector('.ddmc-avatar-text')?.innerHTML).toBe(texts[index]);
    });
  });

  it('triggerIcon button', () => {
    act(() => {
      ReactDOM.render(<Avatar triggerIcon={<IconEdit />}>A</Avatar>, container);
    });

    const component = container?.querySelector('.ddmc-avatar');
    const triggerButton = component?.querySelector('.ddmc-avatar-trigger-icon-button');

    expect(triggerButton?.childElementCount).toBe(1);
    expect(triggerButton?.childNodes[0].nodeName).toBe('svg');
  });

  it('triggerIcon mask', () => {
    act(() => {
      ReactDOM.render(
        <Avatar triggerIcon={<IconEdit />} triggerType="mask">
          A
        </Avatar>,
        container
      );
    });

    const component = container?.querySelector('.ddmc-avatar');
    const triggerButton = component?.querySelector('.ddmc-avatar-trigger-icon-mask');

    expect(triggerButton?.childElementCount).toBe(1);
    expect(triggerButton?.childNodes[0].nodeName).toBe('svg');
  });
});
