import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Empty from '.'

const props = {
  title: 'Empty',
  description: 'This page is empty'
}

describe('<Empty />', () => {
  it('should render properly', () => {
    RenderWithTheme(<Empty {...props} hasLink />)

    expect(screen.getByRole('heading', { name: /Empty/i })).toBeInTheDocument()
    expect(screen.getByText(/This page is empty/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Go back to store' })
    ).toHaveAttribute('href', '/')
  })
  it('should not render the go home button when hasLink is false', () => {
    RenderWithTheme(<Empty {...props} />)

    expect(
      screen.getByRole('link', { name: 'Go back to store' })
    ).not.toBeInTheDocument()
  })
})
