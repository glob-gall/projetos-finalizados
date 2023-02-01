import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    RenderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Game details/i })
    ).toBeInTheDocument()

    //formated values
    expect(screen.getByText(/Nov 21, 2020/i)).toBeInTheDocument()
    expect(screen.getByText(/FREE/i)).toBeInTheDocument()
    expect(screen.getByText(/Role-playing \/ Narrative/i)).toBeInTheDocument()

    //icons
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })
})
