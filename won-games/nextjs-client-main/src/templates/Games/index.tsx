import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

import { parseQueryStringToWhere, parseQueryStringToFilter } from 'utils/filter'
import ExploreSidebar, { ExploreSidebarProps } from 'components/ExploreSideBar'
import { useQueryGames } from 'graphql/queries/games'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'

import Base from 'templates/Base'
import * as S from './styles'
import Empty from 'components/Empty'
import { getImageUrl } from 'utils/getImageUrl'

export type GamesTemplateProps = {
  sideBarProps: ExploreSidebarProps
}

const GamesTemplate = ({ sideBarProps }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 12,
      where: parseQueryStringToWhere({
        queryString: query,
        filterItems: sideBarProps.items
      }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading</p>
  const { games, gamesConnection } = data
  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }
  const handleShowMore = () => {
    fetchMore({ variables: { limit: 12, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={sideBarProps.items}
          onFilter={handleFilter}
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems: sideBarProps.items
          })}
        />
        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    id={game.id}
                    key={game.slug}
                    title={game.name}
                    developer={game.developers[0].name}
                    img={
                      `${getImageUrl(game.cover?.url)}` ||
                      'https://source.unsplash.com/user/willianjusten/300x140'
                    }
                    price={game.price}
                    slug={game.slug}
                  />
                ))}
              </Grid>
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading src="/img/dots.svg" alt="Loading" />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show more</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title="We don't find any games with these filters"
              description="change the filters and find others amazing games."
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
