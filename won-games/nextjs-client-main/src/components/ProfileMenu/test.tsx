import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { RenderWithTheme } from 'utils/test/helpers'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    RenderWithTheme(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })

  it('should render the menu with an active link defined', () => {
    RenderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
