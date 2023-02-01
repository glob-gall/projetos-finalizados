import * as S from './styles'

import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  arrowColor?: 'black' | 'white'
}

const Showcase = ({
  title,
  highlight,
  games,
  arrowColor = 'white'
}: ShowcaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'}>
    {!!title && (
      <Heading lineLeft lineColor="secondary" color="white">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={arrowColor} />}
  </S.Wrapper>
)

export default Showcase
