import { Story, Meta } from '@storybook/react/types-6-0'
import OrderList from '.'

export default {
  title: 'OrderList',
  component: OrderList
} as Meta

export const Default: Story = () => <OrderList />
