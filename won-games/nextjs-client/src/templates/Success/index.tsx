import Container from 'components/Container'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import { Divider } from 'components/Divider'

import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import * as S from './styles'
import { Done } from '@styled-icons/material-outlined'
import Link from 'next/link'
import { useCart } from 'hooks/use-cart'
import { useEffect } from 'react'

export type SuccessProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Cart = ({ recommendedGames, recommendedHighlight }: SuccessProps) => {
  const { clearCart } = useCart()
  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <Base>
      <Container>
        <S.Content>
          <S.SuccessTitle>Your purchase was successfull!</S.SuccessTitle>
          <S.Done>
            <Done />
          </S.Done>
          <S.SuccessSubTitle>
            Wait for your details by email. Your game is no available for
            download inside your{' '}
            <Link href="/profile/orders" passHref>
              <S.Link>Order List</S.Link>
            </Link>
            {'. '}
            Enjoy!
          </S.SuccessSubTitle>
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
