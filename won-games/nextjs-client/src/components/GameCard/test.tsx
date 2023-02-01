import { fireEvent, screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import GameCard from '.'

const props = {
  img: 'img',
  title: 'title',
  developer: ' developer',
  price: 'R$ 200,20',
  slug: 'slug-title'
}

describe('<GameCard />', () => {
  it('should render the gameCard with all props', () => {
    RenderWithTheme(<GameCard {...props} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'img')
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/R\$ 200,20/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'src',
      `/game/${props.slug}`
    )
  })

  it('should render the full favoriteIcon when is favorited', () => {
    RenderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from favorite/i)).toBeInTheDocument()
  })

  it('should call onFav function when favorite in clicked', () => {
    const onFav = jest.fn()

    RenderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })
})
