import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RenderWithTheme } from 'utils/test/helpers'

import Dropdown, { DropdownProps } from '.'

const props = {
  title: 'dropdown'
} as DropdownProps

describe('<Dropdown />', () => {
  it('should render and show content when clicked', () => {
    RenderWithTheme(
      <Dropdown {...props}>
        <span>Content</span>
      </Dropdown>
    )
    const content = screen.getByText(/content/i).parentElement
    const overlay = content?.nextElementSibling

    expect(screen.getByText(/dropdown/i)).toBeInTheDocument()
    expect(content).toHaveAttribute('aria-hidden')
    expect(content).toHaveStyle({ opacity: 0 })

    userEvent.click(screen.getByText(/dropdown/i))

    expect(content).not.toHaveAttribute('aria-hidden')
    expect(content).toHaveStyle({ opacity: 1 })

    userEvent.click(overlay!)

    expect(content).toHaveAttribute('aria-hidden')
    expect(content).toHaveStyle({ opacity: 0 })
  })
})
