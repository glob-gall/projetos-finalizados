import Container from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import { useWishlist } from 'hooks/use-wishlist'
import Spinner from 'components/Spinner'
import * as S from './styles'
export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGamesTtitle?: string
}

const WishList = ({
  recommendedGamesTtitle = 'You may like these games',
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Wish List
        </Heading>
        {loading ? (
          <S.LoadingContainer>
            <Spinner size={84} />
          </S.LoadingContainer>
        ) : items.length ? (
          <Grid>
            {items?.map((props, index) => (
              <GameCard {...props} key={`wishlist-${index}`} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your Wishlist is empty"
            description="find amazing games and add to your Wishlist to they appear here"
            hasLink
          />
        )}
        <Divider />
      </Container>
      <Showcase
        title={recommendedGamesTtitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default WishList
