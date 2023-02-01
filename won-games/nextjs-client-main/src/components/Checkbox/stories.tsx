import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'check' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} label="Action" labelFor="A" isChecked />
    <Checkbox {...args} label="Adventure" labelFor="B" />
    <Checkbox {...args} label="Moba" labelFor="C" />
  </div>
)
