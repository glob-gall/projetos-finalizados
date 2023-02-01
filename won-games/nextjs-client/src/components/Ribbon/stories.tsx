import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '210px',
      height: '210px',
      background: '#d4d4d4',
      position: 'relative'
    }}
  >
    <Ribbon {...args} />
  </div>
)
