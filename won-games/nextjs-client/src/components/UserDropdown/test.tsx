import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RenderWithTheme } from 'utils/test/helpers'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<UserDropdown />', () => {
  it('should render the username and links', () => {
    RenderWithTheme(<UserDropdown username="USERNAME" />)

    expect(screen.getByText(/USERNAME/i)).toBeInTheDocument()

    userEvent.click(screen.getByText(/USERNAME/i))

    expect(screen.getByRole('link', { name: 'My profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wishlist' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign out' })).toBeInTheDocument()
  })
})
