import { Meta, StoryObj } from '@storybook/angular';
import { FxUiInputGroupComponent } from './fx-ui-input-group.component';

const meta: Meta<FxUiInputGroupComponent> = {
  title: 'FX UI/Atomic Design/Molecules/Form Elements/Input Group',
  component: FxUiInputGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    inputType: { control: 'select', options: ['radio', 'checkbox', 'text'] },
    inputLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<FxUiInputGroupComponent>;

export const DefaultInputGroup: Story = {
  args: {
    inputType: 'radio',
    inputLabel: 'Enable notifications for this device ?',
  },
};
