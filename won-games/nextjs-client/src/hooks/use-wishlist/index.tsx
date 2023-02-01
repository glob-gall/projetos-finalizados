import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gamesMapper } from 'utils/mappers'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { useMutation } from '@apollo/client'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishList: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishList: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishListContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()

  const [wishlistId, setWishlistId] = useState<string | null>(null)
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      }
    }
  )
  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      }
    }
  )

  const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [
    wishlistItems
  ])

  const isInWishList = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: { input: { data: { games: [...wishlistIds, id] } } }
      })
    }
    return updateList({
      variables: {
        input: {
          where: {
            id: wishlistId
          },
          data: {
            games: [...wishlistIds, id]
          }
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: {
            id: wishlistId
          },
          data: {
            games: wishlistIds.filter((gameId: string) => gameId !== id)
          }
        }
      }
    })
  }

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishlistId(data?.wishlists[0]?.id || null)
  }, [data])

  return (
    <WishListContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishList,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishListContext.Provider>
  )
}

const useWishlist = () => useContext(WishListContext)

export { WishlistProvider, useWishlist }
