import { BannerProps } from 'components/Banner'
import { gameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import Container from 'components/Container'
import Base from '../Base'

export type HomeTemplateProps = {
  banners: BannerProps[]

  newTitle: string
  newGames: gameCardProps[]

  mostPopularTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: gameCardProps[]

  upcommingTitle: string
  upcommingGames: gameCardProps[]
  upcommingHighligth: HighlightProps

  freeTitle: string
  freeGames: gameCardProps[]
  freeHighligth: HighlightProps
}

import * as S from './styles'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

const Home = ({
  banners,
  freeGames,
  freeHighligth,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcommingGames,
  upcommingHighligth,
  freeTitle,
  mostPopularTitle,
  upcommingTitle,
  newTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>
    <S.SectionNews>
      <Showcase title={newTitle} games={newGames} arrowColor="black" />
    </S.SectionNews>
    <Showcase
      title={mostPopularTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />
    <Showcase
      title={upcommingTitle}
      highlight={upcommingHighligth}
      games={upcommingGames}
    />

    <Showcase title={freeTitle} highlight={freeHighligth} games={freeGames} />
  </Base>
)

export default Home
