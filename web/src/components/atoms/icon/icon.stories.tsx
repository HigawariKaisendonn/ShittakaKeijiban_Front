import type { Meta, StoryObj } from '@storybook/nextjs';
import { Icon } from './icon';
import { Trash2, User, Plus } from 'lucide-react';

const iconOptions = {
  Trash2: Trash2,
  User: User,
  Plus: Plus,
};

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconOptions),
      },
      mapping: iconOptions,
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: Trash2,
    size: 24,
    className: '',
  },
};

export const UserIcon: Story = {
  args: {
    icon: User,
    size: 24,
    className: '',
  },
};

export const PlusIcon: Story = {
  args: {
    icon: Plus,
    size: 24,
    className: '',
  },
};