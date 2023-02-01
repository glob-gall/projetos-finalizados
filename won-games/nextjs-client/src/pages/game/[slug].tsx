import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QueryUpcomming } from 'graphql/generated/QueryUpcomming'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_UPCOMMING } from 'graphql/queries/upcomming'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Game, { GameProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'
import { getImageUrl } from 'utils/getImageUrl'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: GameProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({ params: { slug } }))

  return {
    paths: paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const TODAY = new Date().toISOString().slice(0, 10)

  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })
  if (!data.games.length) {
    return { notFound: true }
  }
  const game = data.games[0]

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  const {
    data: { upcomingGames, showcase }
  } = await apolloClient.query<QueryUpcomming>({
    query: QUERY_UPCOMMING,
    variables: { date: TODAY }
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      galleryProps: {
        items: game.gallery.map((image, index) => ({
          src: `${getImageUrl(image.src)}`,
          label: index
        }))
      },
      gameDetailsProps: {
        developer: game.developers[0].name,
        genres: game.categories.map((category) => category.name),
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        releaseDate: game.release_date
      },
      gameInfoProps: {
        id: game.id,
        description: game.short_description,
        name: game.name,
        price: game.price
      },
      cover:
        `${getImageUrl(game.cover?.src)}` ||
        'https://source.unsplash.com/user/willianjusten/1080x580',
      description: game.description,
      recommendedGames: gamesMapper(recommended?.section?.games),
      upcomingHighlights: highlightMapper(showcase?.upcomingGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames)
    }
  }
}
