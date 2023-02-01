import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'

export default {
  title: 'Games/TextContent',
  component: TextContent
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)

Default.args = {
  title: 'Game Title',
  content:
    '<h4>about the game lalalala</h4> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eos nostrum atque facilis nemo nulla commodi vel dignissimos quia officia iusto accusantium quis, harum ex. Beatae rem impedit necessitatibus qui.</p>'
}
