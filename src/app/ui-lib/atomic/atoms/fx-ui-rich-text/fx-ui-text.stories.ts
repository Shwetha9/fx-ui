import { Meta, StoryObj } from '@storybook/angular';
import { FxUiRichTextComponent } from './fx-ui-rich-text.component';

const meta: Meta<FxUiRichTextComponent> = {
  title: 'FX UI/Atomic Design/Atoms/Rich Text',
  component: FxUiRichTextComponent,
  tags: ['autodocs'],
  argTypes: {
    richText: { control: 'text' },
  },
};

const contentLg = `We coach Little League in the Blue States and yes, we've got some gay friends in the Red States. The dream of opportunity for all people has not come true for everyone in America, but its promise exists for all who come to our shores - that includes nearly seven million American Muslims in our country today who enjoy incomes and education that are higher than average. Each nation gives life to this principle in its own way, grounded in the traditions of its own people. America does not presume to know what is best for everyone, just as we would not presume to pick the outcome of a peaceful election. But I do have an unyielding belief that all people yearn for certain things: the ability to speak your mind and have a say in how you are governed; confidence in the rule of law and the equal administration of justice; government that is transparent and doesn't steal from the people; the freedom to live as you choose. Those are not just American ideas, they are human rights, and that is why we will support them everywhere.`;

const contentSm = `We coach Little League in the Blue States and yes, we've got some gay friends in the Red States. The dream of opportunity for all people has not come true for everyone in America, but its promise exists for all who come to our shores - that includes nearly seven million American Muslims in our country today who enjoy incomes and education that are higher than average. Each nation gives life to this principle in its own way, grounded in the traditions of its own people`;

export default meta;

type Story = StoryObj<FxUiRichTextComponent>;

export const RichText: Story = {
  args: {
    richText: `<h1>I am a heading</h1> <br/> <p>${contentLg}</p> <hr> <p>${contentSm}</p>`,
  },
};
