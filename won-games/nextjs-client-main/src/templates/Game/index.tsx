import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import Gallery, { GalleryProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { gameInfoProps } from 'components/GameInfo'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import * as S from './styles'
import { Divider } from 'components/Divider'

export type GameProps = {
  slug: string
  cover: string
  gameInfo: gameInfoProps
  gameDetails: GameDetailsProps
  gallery?: GalleryProps
  description: string
  upcomingGames: GameCardProps[]
  upcomingHighlights: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  slug,
  cover,
  gameInfo,
  gameDetails,
  gallery,
  description,
  recommendedGames,
  upcomingGames,
  upcomingHighlights
}: GameProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.name} - Won Games`}
      description={gameInfo.description}
      canonical={`https://www.wongames.glob.com/game/${slug}`}
      openGraph={{
        url: `https://www.wongames.glob.com/game/${slug}`,
        title: `${gameInfo.name} - Won games`,
        description: gameInfo.description,
        images: [{ url: cover, alt: gameInfo.name }]
      }}
    />
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.SectionGameInfo>
      <GameInfo {...gameInfo} />
    </S.SectionGameInfo>

    {!!gallery && (
      <S.SectionGallery>
        <Gallery {...gallery} />
      </S.SectionGallery>
    )}

    <S.SectionContent>
      <TextContent title="Description" content={description} />
    </S.SectionContent>

    <S.SectionGameDetails>
      <GameDetails {...gameDetails} />
      <Divider />
    </S.SectionGameDetails>

    <Showcase
      title="Upcoming"
      highlight={upcomingHighlights}
      games={upcomingGames}
    />
    <Showcase title="You may like there games" games={recommendedGames} />
  </Base>
)

export default Game
