import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { initializeApollo } from 'utils/apollo'
import Home, { HomeTemplateProps } from '../templates/Home'
import { QUERY_HOME } from '../graphql/queries/home'
import { BannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  // if (loading) return <p>loading...</p>
  // if (error) return <p>ERROR: {JSON.stringify(error, null, 2)}</p>
  // if (data) return <p>{JSON.stringify(data, null, 2)}</p>

  return <Home {...props} />
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, freeGames, newGames, upcomingGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60,
    props: {
      banners: BannerMapper(banners),
      newGames: gamesMapper(newGames),
      freeGames: gamesMapper(freeGames),
      upcommingGames: gamesMapper(upcomingGames),
      mostPopularGames: gamesMapper(sections?.popularGames?.games),
      freeHighligth: highlightMapper(sections?.freeGames?.highlight),
      upcommingHighligth: highlightMapper(sections?.upcomingGames?.highlight),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),

      mostPopularTitle: sections?.popularGames?.title,
      upcommingTitle: sections?.upcomingGames?.title,
      freeTitle: sections?.freeGames?.title,
      newTitle: sections?.newGames?.title
    }
  }
}
