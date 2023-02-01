import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSideBar, { ExploreSidebarProps } from '.'
import mock from '__mocks__/ExploreSideBar'
export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items: mock
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSideBar {...args} />
)
export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <ExploreSideBar {...args} />
)
WithInitialValues.args = {
  initialValues: {
    platforms: ['windows'],
    sort_by: 'low-to-high'
  }
}
