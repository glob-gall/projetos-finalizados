import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined'
export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'Email',
    initialValue: '',
    icon: <Email />,
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: 'Este Campo é obrigatório'
}
