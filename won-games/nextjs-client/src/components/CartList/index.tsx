import Link from 'next/link'

import Button from 'components/Button'
import GameItem from 'components/GameItem'
import Empty from 'components/Empty'

import * as S from './styles'
import { Items } from 'components/ExploreSideBar/styles'
import { useCart } from 'hooks/use-cart'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton }: CartListProps) => {
  const { items, total } = useCart()

  return (
    <S.Wrapper isEmpty={!Items.length}>
      {items.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}
          <S.Footer>
            {!hasButton && 'Total:'}
            <span>{total}</span>
            {hasButton && (
              <Link href="/cart">
                <Button size="small" as="a">
                  Buy now
                </Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Cart is Empty"
          description="Add new items no cart to see their here"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
