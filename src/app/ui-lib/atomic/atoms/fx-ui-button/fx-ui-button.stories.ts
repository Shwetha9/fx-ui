import { Meta, StoryObj } from '@storybook/angular';
import { FxUiButtonComponent } from './fx-ui-button.component';

const meta: Meta<FxUiButtonComponent> = {
  title: 'FxUiButton',
  component: FxUiButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['submitBtn', 'linkBtn'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] },
    shape: { control: 'select', options: ['square', 'rounded', 'circle'] },
    iconPosition: { control: 'select', options: ['icon', 'icon-left', 'icon-right'] },
    state: { control: 'select', options: ['active', 'disabled', 'loading', 'hover', 'focus', 'error', 'success'] },
    label: { control: 'text' },
  },
  args: {
    type: 'submitBtn',
    size: 'medium',
    color: 'primary',
    shape: 'rounded',
    iconPosition: 'icon',
    state: 'active',
    label: 'Click Me',
  }
};

export default meta;

type Story = StoryObj<FxUiButtonComponent>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Loading: Story = {
  args: {
    state: 'loading',
  },
};

export const WithIconLeft: Story = {
  args: {
    iconPosition: 'icon-left',
    label: 'Click Me with Icon',
  },
};

export const WithIconRight: Story = {
  args: {
    iconPosition: 'icon-right',
    label: 'Click Me with Icon',
  },
};
