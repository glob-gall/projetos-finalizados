import { Story, Meta } from '@storybook/react/types-6-0'
import CartDropdown, { CardDropdownProps } from '.'
import CartListMock from '__mocks__/CartList'
export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CardDropdownProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

Default.args = CartListMock

export const Empty: Story<CardDropdownProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
