import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { logoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: Story<logoProps> = (args) => <Logo {...args} />
