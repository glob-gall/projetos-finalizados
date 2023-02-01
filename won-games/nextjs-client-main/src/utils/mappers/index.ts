import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import formatPrice from 'utils/formatPrice'
import { getImageUrl } from 'utils/getImageUrl'

export const BannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    img: `${getImageUrl(banner.image?.url)}`,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover
          ? `${getImageUrl(game.cover.url)}`
          : 'https://source.unsplash.com/user/willianjusten/300x140',
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      backgroundImage: `${getImageUrl(highlight.background?.url)}`,
      floatImg: `${getImageUrl(highlight.floatImage?.url)}`,
      alignment: highlight.alignment
    }
  )
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `${getImageUrl(game.cover?.url)}`,
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[]) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.jpg` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink: `${process.env.NEXT_PUBLIC_API_URL}/game/download/${game.slug}`,
            img: `${process.env.NEXT_PUBLIC_API_URL}${game.cover?.url}`,
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
