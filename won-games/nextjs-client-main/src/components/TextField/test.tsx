import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RenderWithTheme } from 'utils/test/helpers'
import { Email } from '@styled-icons/material-outlined'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    RenderWithTheme(<TextField label="label" name="filed" />)

    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })
  it('render with placeholder', () => {
    RenderWithTheme(<TextField placeholder="Placeholder" />)
    expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument()
  })

  it('change the value when typing', async () => {
    const onInput = jest.fn()
    RenderWithTheme(
      <TextField onInput={onInput} label="TextField" name="TextField" />
    )

    const input = screen.getByRole('textbox')
    const text = 'a text example'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(input).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible by tab', () => {
    RenderWithTheme(<TextField />)

    userEvent.tab()

    expect(screen.getByRole('textbox')).toHaveFocus()
  })
  it('should render with icon', () => {
    RenderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should does not change when its disabled', () => {
    RenderWithTheme(<TextField iconPosition="right" disabled />)

    const input = screen.getByRole('textbox')

    const text = 'text example'

    userEvent.type(input, text)

    expect(input).not.toHaveBeenCalled()
  })
  it('should render with error', () => {
    RenderWithTheme(<TextField error="opa um erro" />)

    expect(screen.getByText('opa um erro')).toBeInTheDocument()
  })
})
