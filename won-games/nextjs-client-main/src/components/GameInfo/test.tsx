import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import GameInfo from '.'

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    RenderWithTheme(
      <GameInfo
        name="game name"
        description="game description"
        price="R$ 124,00"
      />
    )

    expect(
      screen.getByRole('heading', { name: /game name/i })
    ).toBeInTheDocument()
    expect(screen.getByText('game description')).toBeInTheDocument()
    expect(screen.getByText('R$ 124,00')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
