import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { RenderWithTheme } from 'utils/test/helpers'
import filterItemsMock from '__mocks__/ExploreSideBar'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'
import apolloCache from 'utils/apolloCache'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

const sideBarProps = {
  items: filterItemsMock,
  onFilter: jest.fn
}

describe('<Games />', () => {
  it('should render sections', async () => {
    RenderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'RimWorld',
                    slug: 'rimworld',
                    cover: {
                      url: '/uploads/rimworld_8e93acc963.jpg'
                    },
                    developers: [{ name: 'Ludeon Studios' }],
                    price: 65.99,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games sideBarProps={sideBarProps} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText('RimWorld')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    RenderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Sample Game',
                    slug: 'sample-game',
                    price: 518.39,
                    developers: [{ name: 'sample developer' }],
                    cover: {
                      url: 'sample-game.jpg'
                    },
                    __typename: 'Game'
                  }
                ]
              }
            }
          },
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15, start: 1 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Fetch More Game',
                    slug: 'fetch-more',
                    price: 518.39,
                    developers: [{ name: 'sample developer' }],
                    cover: {
                      url: 'sample-game.jpg'
                    },
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        cache={apolloCache}
      >
        <Games sideBarProps={sideBarProps} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })
})
