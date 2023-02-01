import { screen, waitFor } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the checkbox', () => {
    RenderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  // it('should not render a label if the property label as not passed', () => {
  //   RenderWithTheme(<Checkbox />)

  //   expect(screen.getByRole(''))
  // })
  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    RenderWithTheme(<Checkbox label="label box" onCheck={onCheck} />)

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    RenderWithTheme(<Checkbox onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenLastCalledWith(false)
  })
  it('should be accessible with tab', () => {
    RenderWithTheme(
      <div>
        <Checkbox label="um" labelFor="1" />)
        <Checkbox label="dois" labelFor="2" />)
      </div>
    )

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/um/i)).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/dois/i)).toHaveFocus()
  })
})
