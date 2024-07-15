import { Meta, StoryObj } from '@storybook/angular';
import { FxUiButtonComponent } from './fx-ui-button.component';

const meta: Meta<FxUiButtonComponent> = {
  title: 'FX UI/Atomic Design/Atoms/Button',
  component: FxUiButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['fill','outline'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ],
    },
    shape: { control: 'select', options: ['square', 'rounded', 'circle'] },
    iconPosition: {
      control: 'select',
      options: ['icon', 'icon-left', 'icon-right'],
    },
    state: {
      control: 'select',
      options: [
        'active',
        'disabled',
        'loading',
        'hover',
        'focus',
        'error',
        'success',
      ],
    },
    label: { control: 'text' },
  },
  args: {
    type: 'fill',
    size: 'medium',
    color: 'primary',
    shape: 'rounded',
    iconPosition: 'icon',
    state: 'active',
    label: 'Sign In',
  },
};

export default meta;

type Story = StoryObj<FxUiButtonComponent>;

export const Default: Story = {
  args: {
    color: 'tertiary',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    state: 'loading',
  },
};

export const WithIconLeft: Story = {
  args: {
    iconPosition: 'left',
    label: 'Return',
    icon: 'chevron_left',
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Next',
    iconPosition: 'right',
    icon: 'chevron_right',
  },
};
