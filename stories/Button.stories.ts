import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const 기본: Story = {
  args: {
    primary: true,
    label: '알그스 라벨1',
  },
};

export const 두번쨰: Story = {
  args: {
    label: '알그스 라벨2',
  },
};

export const 라지: Story = {
  args: {
    size: 'large',
    label: '알그스 라벨3',
  },
};

export const 스몰: Story = {
  args: {
    size: 'small',
    label: '알그스 라벨4',
  },
};

