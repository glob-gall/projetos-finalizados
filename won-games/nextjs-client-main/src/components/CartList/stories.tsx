import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'
import CartListMock from '__mocks__/CartList'
export default {
  title: 'CartList',
  component: CartList,
  args: CartListMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => <CartList {...args} />

export const WithButton: Story<CartListProps> = (args) => (
  <CartList {...args} hasButton />
)
export const Empty: Story<CartListProps> = () => <CartList />
