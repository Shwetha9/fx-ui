import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { FxUiInputGroupComponent } from './fx-ui-input-group.component';

const meta: Meta<FxUiInputGroupComponent> = {
  title: 'FX UI/Atomic Design/Molecules/Form Elements/Input Group',
  component: FxUiInputGroupComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FxUiInputGroupComponent>;

export const DefaultInputGroup: Story = {
  args: {
    inputType: 'radio',
    inputLabel: 'Input Label',
  },
};
