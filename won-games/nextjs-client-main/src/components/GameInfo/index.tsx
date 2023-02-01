import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import formatPrice from 'utils/formatPrice'
import * as S from './styles'

export type gameInfoProps = {
  id: string
  name: string
  description: string
  price: number
}

const GameInfo = ({ name, description, price, id }: gameInfoProps) => (
  <S.Wrapper>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <Heading lineBottom color="black" lineColor="primary">
      {name}
    </Heading>
    <S.Description>{description}</S.Description>

    <S.ButtonWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} size="large" hasText />
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default GameInfo
