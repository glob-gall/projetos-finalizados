import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  title: 'Empty page... nothing to see here',
  description: 'this page is empty, come back soon',
  hasLink: true
}
