import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Game, { GameProps } from '.'

const props: GameProps = {
  galleryProps: {
    items: [
      {
        src: 'https://source.unsplash.com/user/willianjusten/1042x580',
        label: 'label 1'
      },
      {
        src: 'https://source.unsplash.com/user/willianjusten/1080x580',
        label: 'label 2'
      },
      {
        src: 'https://source.unsplash.com/user/willianjusten/520x580',
        label: 'label 3'
      },
      {
        src: 'https://source.unsplash.com/user/willianjusten/1042x520',
        label: 'label 4'
      },
      {
        src: 'https://source.unsplash.com/user/willianjusten/520x520',
        label: 'label 5'
      }
    ]
  },
  gameDetailsProps: {
    developer: 'Developer',
    genres: ['Action', 'Adventure'],
    platforms: ['windows', 'mac'],
    publisher: 'Develover Publisher',
    rating: 'BR16',
    releaseDate: '2020-11-21T23:00:00'
  },
  gameInfoProps: {
    description:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
    name: 'Borderlands 3',
    price: 'R$ 215,00'
  },
  cover: 'https://source.unsplash.com/user/willianjusten/1080x580',
  description:
    'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
  recommendedGames: [
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x140',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x141',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x142',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x143',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x144',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x145',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    }
  ],
  upcomingHighlights: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/Background.png',
    floatImg: '/img/Image.png'
  },
  upcomingGames: [
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x140',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x141',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x142',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x143',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x144',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x145',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    }
  ]
}

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="gallery-mock">Gallery Mock</div>
    }
  }
})
jest.mock('components/GameDetails', () => {
  return {
    esModule: true,
    default: function Mock() {
      return <div data-testid="gamedetail-mock">Game Details Mock</div>
    }
  }
})
jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="gameinfo-mock">Game Info Mock</div>
    }
  }
})
jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="showcase-mock">Show case Mock</div>
    }
  }
})
jest.mock('components;TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="textcontent-mock">Text Content Mock</div>
    }
  }
})

describe('<Game />', () => {
  it('should render template with all components ', () => {
    RenderWithTheme(<Game {...props} />)

    expect(screen.getByLabelText(/cover/i)).toBeInTheDocument()
    expect(screen.getByTestId(/textcontent-mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/gallery-mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/gamedetail-mock/i)).toBeInTheDocument()
    expect(screen.getByTestId(/gameinfo-mock/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/showcase-mock/i)).toHaveLength(2)
  }),
    it('shold not render the gallery with no images', () => {
      RenderWithTheme(<Game {...props} galleryProps={undefined} />)

      expect(screen.queryByTestId(/gallery-mock/i)).not.toBeInTheDocument()
    }),
    it('shold not render the gallery in mobile', () => {
      RenderWithTheme(<Game {...props} />)

      expect(screen.getByTestId(/gallery-mock/i)).toHaveStyleRule(
        'display',
        'none',
        {
          media: '(max-width:768px)'
        }
      )
      expect(screen.getByTestId(/gallery-mock/i)).toHaveStyleRule(
        'display',
        'block',
        {
          media: '(min-width:768px)'
        }
      )
    })
})
