import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { headingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<headingProps> = (args) => <Heading {...args} />
