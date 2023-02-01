import { Download } from '@styled-icons/boxicons-solid'
import Button from 'components/Button'
import { useCart } from 'hooks/use-cart'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({ id, img, price, title, downloadLink }: GameItemProps) => {
  const { removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.Download
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.Download>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>
      <Button minimal size="small" onClick={() => removeFromCart(id)}>
        remove
      </Button>
    </S.Wrapper>
  )
}

export default GameItem
