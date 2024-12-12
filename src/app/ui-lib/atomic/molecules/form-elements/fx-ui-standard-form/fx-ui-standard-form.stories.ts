import { Meta, StoryObj } from '@storybook/angular';
import { FxUiStandardFormComponent } from './fx-ui-standard-form.component';

const meta: Meta<FxUiStandardFormComponent> = {
  title: 'FX UI/Atomic Design/Molecules/Form Elements/Input Group',
  component: FxUiStandardFormComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<FxUiStandardFormComponent>;

export const DefaultForm: Story = {
  args: {},
};
