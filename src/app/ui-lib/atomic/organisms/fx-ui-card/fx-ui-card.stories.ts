import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { FxUiCardComponent } from './fx-ui-card.component';
const meta: Meta<FxUiCardComponent> = {
  title: 'FX UI/Atomic Design/Organisms/Card',
  component: FxUiCardComponent,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    componentWrapperDecorator(
      (
        story,
      ) => `<section style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: stretch;">
                    <div style="flex: auto; max-width: calc(100%/4)">${story}</div>
                    <div style="flex: auto; max-width: calc(100%/4)">${story}</div>
                    <div style="flex: auto; max-width: calc(100%/4)">${story}</div>
                    <div style="flex: auto; max-width: calc(100%/4)">${story}</div>
                    <div style="flex: auto; max-width: calc(100%/4)">${story}</div>
                    <div style="flex: auto; max-width: calc(100%/4)">${story}</div>
                  </section>`,
    ),
  ],
};

const sampleRichText =
  '<h3>Some inner title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.</p>';

export default meta;

type Story = StoryObj<FxUiCardComponent>;

export const DefaultCard: Story = {
  args: {
    cardTitle: 'Card Title',
    cardDescription: sampleRichText,
    cardImage: 'https://picsum.photos/300/200',
    cardImgAltText: 'Placeholder Image',
    cardFooter: {
      footerButton: 'Footer Button',
    },
  },
};
