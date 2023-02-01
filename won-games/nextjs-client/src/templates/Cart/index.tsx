import Container from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { Divider } from 'components/Divider'

import { Session } from 'next-auth'
import CartList, { CartListProps } from 'components/CartList'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { loadStripe } from '@stripe/stripe-js'
import * as S from './styles'
import PaymentForm from 'components/PaymentForm'
import Empty from 'components/Empty'
import { useCart } from 'hooks/use-cart'
import { Elements } from '@stripe/react-stripe-js'

export type CartProps = {
  session: Session
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const Stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  session
}: CartProps) => {
  const { items } = useCart()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My cart
        </Heading>

        <S.Content>
          {items ? (
            <CartList />
          ) : (
            <Empty
              title="You have no games here"
              description="Go to store and find the best games to buy"
            />
          )}
          <Elements stripe={Stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title="You may like this games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
