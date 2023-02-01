import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import * as S from './styles'
import { useCart } from 'hooks/use-cart'

export type CardDropdownProps = {
  total?: string
}

const CartDropdown = ({ total }: CardDropdownProps) => {
  const { items } = useCart()

  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        <CartList items={items} total={total} hasButton />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
