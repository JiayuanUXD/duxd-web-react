import React from 'react';
import Cascader from '../cascader';
import { fireEvent, render } from '../../../tests/util';
import { Backspace } from '../../_util/keycode';

const options = [
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'shanghaishi',
        label: '上海市',
      },
    ],
  },
];

describe('Cascader basic test', () => {
  // 生命周期
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    // 运行所有定时器
    jest.runAllTimers();
  });

  it('string[] correctly', () => {
    const wrapper = render(
      <Cascader defaultValue={['shanghai', 'shanghaishi']} options={options} mode="multiple" />
    );

    expect(wrapper.querySelector('.ddmc-tag-content')?.textContent).toBe('');
  });

  it('string[][] correctly', () => {
    const wrapper = render(
      <Cascader
        defaultValue={[['shanghai', 'shanghaishi'], 'xxx']}
        options={options}
        mode="multiple"
      />
    );

    expect(wrapper.querySelectorAll('.ddmc-tag-content').item(1)?.textContent).toBe('');
  });

  it('checked & unchecked correctly', () => {
    const options = [
      {
        value: 'Beijing',
        label: 'Beijing',
        children: [
          {
            value: 'dongcheng',
            label: 'Dongcheng',
            disabled: true,
            children: [
              {
                value: 'chaoyangmen',
                label: 'Chaoyangmen',
              },
              {
                value: 'jianguo',
                label: 'Jianguomen',
              },
            ],
          },
          {
            value: 'xicheng',
            label: 'Xicheng',
          },
        ],
      },
    ];
    const wrapper = render(<Cascader options={options} mode="multiple" />);

    fireEvent.click(wrapper.find('.ddmc-cascader')[0]);
    expect(wrapper.find(`.ddmc-cascader-list-column`)).toHaveLength(1);
    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-indeterminate');
    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0].className).toBe('ddmc-checkbox');
  });

  it('halfchecked correctly', () => {
    const options = [
      {
        value: 'beijing',
        label: 'Beijing',
        children: [
          {
            value: 'dongcheng',
            label: 'Dongcheng',
            disabled: true,
            children: [
              {
                value: 'chaoyangmen',
                label: 'Chaoyangmen',
              },
              {
                value: 'jianguo',
                label: 'Jianguomen',
              },
            ],
          },
          {
            value: 'xicheng',
            label: 'Xicheng',
          },
        ],
      },
    ];
    const wrapper = render(
      <Cascader
        defaultValue={[['beijing', 'dongcheng', 'chaoyangmen']]}
        options={options}
        mode="multiple"
      />
    );

    fireEvent.click(wrapper.find('.ddmc-cascader')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-indeterminate');
    expect(wrapper.find('[title="Dongcheng"] .ddmc-checkbox')[0]).toHaveClass(
      'ddmc-checkbox-indeterminate'
    );

    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-indeterminate');
    expect(wrapper.find('[title="Xicheng"] .ddmc-checkbox')[0]).toHaveClass(
      'ddmc-checkbox-checked'
    );

    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-indeterminate');
    expect(wrapper.find('[title="Dongcheng"] .ddmc-checkbox')[0]).toHaveClass(
      'ddmc-checkbox-indeterminate'
    );
    expect(wrapper.find('[title="Xicheng"] .ddmc-checkbox')[0].className).toBe('ddmc-checkbox');
  });

  it('checked & halfchecked correctly', () => {
    const options = [
      {
        value: 'beijing',
        label: 'Beijing',
        children: [
          {
            value: 'dongcheng',
            label: 'Dongcheng',
            disabled: true,
            children: [
              {
                value: 'chaoyangmen',
                label: 'Chaoyangmen',
              },
              {
                value: 'jianguo',
                label: 'Jianguomen',
              },
            ],
          },
          {
            value: 'xicheng',
            label: 'Xicheng',
          },
        ],
      },
    ];
    const wrapper = render(
      <Cascader
        defaultValue={[
          ['beijing', 'dongcheng', 'chaoyangmen'],
          ['beijing', 'dongcheng', 'jianguo'],
        ]}
        options={options}
        mode="multiple"
      />
    );

    fireEvent.click(wrapper.find('.ddmc-cascader')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-indeterminate');
    expect(wrapper.find('[title="Dongcheng"] .ddmc-checkbox')[0]).toHaveClass(
      'ddmc-checkbox-checked'
    );

    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-checked');
    expect(wrapper.find('[title="Xicheng"] .ddmc-checkbox')[0]).toHaveClass(
      'ddmc-checkbox-checked'
    );

    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);
    expect(wrapper.find('.ddmc-checkbox')[0]).toHaveClass('ddmc-checkbox-indeterminate');
    expect(wrapper.find('[title="Dongcheng"] .ddmc-checkbox')[0]).toHaveClass(
      'ddmc-checkbox-checked'
    );
    expect(wrapper.find('[title="Xicheng"] .ddmc-checkbox')[0].className).toBe('ddmc-checkbox');
  });

  it('changeonselect ', () => {
    const wrapper = render(<Cascader changeOnSelect options={options} mode="multiple" />);

    fireEvent.click(wrapper.find('.ddmc-cascader')[0]);
    fireEvent.click(wrapper.find('.ddmc-cascader-list-item-label')[0]);
    expect(wrapper.find('.ddmc-checkbox')).toHaveLength(2);
    fireEvent.click(wrapper.find('.ddmc-checkbox')[1]);

    expect(wrapper.find('.ddmc-tag')).toHaveLength(1);

    fireEvent.click(wrapper.find('.ddmc-checkbox')[0]);

    expect(wrapper.find('.ddmc-tag')).toHaveLength(2);
  });

  it('delete by Del ', () => {
    const wrapper = render(
      <Cascader
        options={options}
        defaultValue={[
          ['beijing', 'dongcheng', 'chaoyangmen'],
          ['beijing', 'dongcheng', 'jianguo'],
        ]}
        mode="multiple"
        showSearch
      />
    );

    fireEvent.click(wrapper.find('.ddmc-cascader')[0]);

    fireEvent.keyDown(wrapper.find('input')[0], {
      keyCode: Backspace.code,
    });

    jest.runAllTimers();

    expect(wrapper.find('.ddmc-tag')).toHaveLength(1);
  });

  it('dragToSort controlled', () => {
    const defaultValue = [
      ['shanghai', 'shanghai'],
      ['beijing', 'beijing'],
    ];
    let value: string[][] = defaultValue;
    const wrapper = render(
      <Cascader
        dragToSort
        value={value}
        onChange={(v) => (value = v as string[][])}
        options={[
          {
            value: 'shanghai',
            label: 'Shanghai',
            children: [
              {
                value: 'shanghai',
                label: 'Shanghai',
              },
            ],
          },
          {
            value: 'beijing',
            label: 'Beijing',
            children: [
              {
                value: 'beijing',
                label: 'Beijing',
              },
            ],
          },
        ]}
        mode="multiple"
      />
    );

    expect(wrapper.querySelectorAll('.ddmc-tag')).toHaveLength(2);
    expect(wrapper.querySelector('.ddmc-tag-content')?.textContent).toBe('Shanghai / Shanghai');

    const tags = wrapper.querySelectorAll('.ddmc-draggable-item');

    fireEvent.drag(tags[1]);
    fireEvent.dragStart(tags[1]);
    fireEvent.dragOver(tags[0], {
      pageX: 0,
    });

    fireEvent.drop(tags[0]);
    expect(value).toEqual(defaultValue.reverse());
  });

  it('dragToSort uncontrolled', () => {
    let value: string[][] = [];
    const defaultValue = [
      ['shanghai', 'shanghai'],
      ['beijing', 'beijing'],
    ];
    const wrapper = render(
      <Cascader
        dragToSort
        defaultValue={defaultValue}
        onChange={(v) => (value = v as string[][])}
        options={[
          {
            value: 'shanghai',
            label: 'Shanghai',
            children: [
              {
                value: 'shanghai',
                label: 'Shanghai',
              },
            ],
          },
          {
            value: 'beijing',
            label: 'Beijing',
            children: [
              {
                value: 'beijing',
                label: 'Beijing',
              },
            ],
          },
        ]}
        mode="multiple"
      />
    );

    expect(wrapper.querySelectorAll('.ddmc-tag')).toHaveLength(2);
    const tags = wrapper.querySelectorAll('.ddmc-draggable-item');

    fireEvent.drag(tags[1]);
    fireEvent.dragStart(tags[1]);
    fireEvent.dragOver(tags[0], {
      pageX: 0,
    });

    fireEvent.drop(tags[0]);
    expect(value).toEqual(defaultValue.reverse());
    expect(wrapper.querySelector('.ddmc-tag-content')?.textContent).toBe('Beijing / Beijing');
  });
});
