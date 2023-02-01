import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gameMock = (id: string) => ({
  id,
  name: `name ${id}`,
  slug: `slug-${id}`,
  price: 10.5,
  developers: [{ name: 'developer' }],
  cover: {
    url: '/img.jpg'
  },
  __typename: 'Game'
})

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: 'valid-jwt' } },
    variables: {
      identifier: 'valid@email.com'
    }
  },
  result: {
    data: {
      wishlists: [
        {
          id: '1',
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}

export const CreateWishlistMock = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { jwt: 'valid-jwt' } },
    variables: {
      input: {
        data: {
          games: ['3']
        }
      }
    }
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('3')]
        }
      }
    }
  }
}

export const UpdateWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'valid-jwt' } },
    variables: {
      input: {
        where: { id: 1 },
        data: {
          games: ['1', '2', '3']
        }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('1'), gameMock('2 '), gameMock('3')]
        }
      }
    }
  }
}

export const RemoveWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'valid-jwt' } },
    variables: {
      input: {
        where: { id: 1 },
        data: {
          games: ['2']
        }
      }
    }
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('2 ')]
        }
      }
    }
  }
}
