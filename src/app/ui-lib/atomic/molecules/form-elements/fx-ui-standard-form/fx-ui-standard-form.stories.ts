import { Meta, StoryObj } from '@storybook/angular';
import { FxUiStandardFormComponent } from './fx-ui-standard-form.component';

const meta: Meta<FxUiStandardFormComponent> = {
  title: 'FX UI/Atomic Design/Organisms/Form Elements/Example Form',
  component: FxUiStandardFormComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<FxUiStandardFormComponent>;

export const DefaultForm: Story = {
  args: {},
};
