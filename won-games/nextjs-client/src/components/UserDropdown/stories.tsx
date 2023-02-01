import { Story, Meta } from '@storybook/react/types-6-0'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ marginLeft: '30rem' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  username: 'Luis Felipe'
}
