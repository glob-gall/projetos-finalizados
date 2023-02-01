import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from '.'

import { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args: ButtonProps) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}
export const WithIcon: Story = (args: ButtonProps) => <Button {...args} />

WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const AsLink: Story = (args: ButtonProps) => <Button {...args} />

AsLink.args = {
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />

Disabled.args = {
  children: 'Buy now',
  disabled: true
}
