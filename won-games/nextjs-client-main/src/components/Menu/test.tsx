import { fireEvent, render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    RenderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })

  it('shold open/close the mobile menu', () => {
    RenderWithTheme(<Menu />)

    //select the menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    //verify if the menu is hidden
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    // expect(fullMenuElement).toHaveStyle({ width: 0 })

    //click in the menu button an check if opened
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    // expect(fullMenuElement).toHaveStyle({ width: '100%' })

    //click in the X button and check if closed
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    // expect(fullMenuElement).toHaveStyle({ width: '0%' })
  })

  it('shold show wishlist and my account if is logged', () => {
    RenderWithTheme(<Menu username="userName" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })

  it('shold show the log in now button and sign up link if no have user loged in', () => {
    RenderWithTheme(<Menu />)

    expect(screen.getByText(/log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('should not show sign in or dropdown user if loading', () => {
    render(<Menu username="name" loading />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
