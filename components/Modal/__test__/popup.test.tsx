import React from 'react';
import mountTest from '../../../tests/mountTest';
import Modal from '..';
import Select from '../../Select';
import { $, cleanup, fireEvent, render } from '../../../tests/util';

mountTest(Modal);

/*
 * 测试modal中的popup
 */

describe('Modal popup test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    document.body.innerHTML = '';
    jest.runAllTimers();
  });

  it('popup correctly', () => {
    const wrapper = render(
      <div>
        <Modal title="Title" visible>
          <Select options={[1, 2, 3]} />
        </Modal>
      </div>
    );
    jest.useFakeTimers();

    fireEvent.click(wrapper.find('.ddmc-select-view')[0]);

    jest.runAllTimers();

    expect($('.ddmc-select-popup').length).toBe(1);
    const zIndex = +window.getComputedStyle(
      document.querySelector('.ddmc-modal-wrapper') as HTMLElement,
      null
    )?.zIndex;
    expect(Number($('.ddmc-select-popup')[0].parentNode.style['z-index'])).toBe(zIndex + 1);
    // dom插入在 content下。
    expect($('.ddmc-modal-content .ddmc-select-popup').length).toBe(1);
  });

  it('getChildrenPopupContainer correctly', () => {
    const wrapper = render(
      <Modal
        title="Title"
        visible
        getChildrenPopupContainer={() => {
          // console.log(document.querySelector('.test'));
          return document.querySelector('.test') as Element;
        }}
      >
        <div className="test">
          <Select options={[1, 2, 3]} />
        </div>
      </Modal>
    );

    jest.useFakeTimers();

    fireEvent.click(wrapper.find('.ddmc-select-view')[0]);
    jest.runAllTimers();

    expect($('.ddmc-select-popup').length).toBe(1);
    // dom插入在 test 下
    expect($('.test .ddmc-select-popup').length).toBe(1);
  });
});
