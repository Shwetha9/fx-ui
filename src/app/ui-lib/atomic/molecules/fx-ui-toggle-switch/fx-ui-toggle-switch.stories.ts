import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { FxUiToggleSwitchComponent } from './fx-ui-toggle-switch.component';

const meta: Meta<FxUiToggleSwitchComponent> = {
  title: 'FX UI/Atomic Design/Molecules/Toggle Box',
  component: FxUiToggleSwitchComponent,
  tags: ['autodocs'],
    argTypes: {
        toggleTextPosition: { control: 'select', options: ['left', 'right'] },
        toggleSupportText: { control: 'text' },
    },
    decorators: [componentWrapperDecorator((story) => `<div style="width:80%">${story}</div>`)],
};

export default meta;

type Story = StoryObj<FxUiToggleSwitchComponent>;

export const DefaultToggle: Story = {
  args: {
    toggleTextPosition: 'left',
    toggleSupportText: 'Do you want to enable this setting?',
  },
};

export const ToggleTextRight: Story = {
    args: {
      toggleTextPosition: 'right',
      toggleSupportText: 'Do you want to enable this setting?',
    },
  };
