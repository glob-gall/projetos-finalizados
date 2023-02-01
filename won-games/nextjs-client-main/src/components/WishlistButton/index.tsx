import { useState } from 'react'
import { useSession } from 'next-auth/client'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useWishlist } from 'hooks/use-wishlist'
import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const { addToWishlist, removeFromWishlist } = useWishlist()
  const { isInWishList } = useWishlist()

  const [session] = useSession()
  const [loading, setLoading] = useState(false)

  const ButtonText = isInWishList(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'

  if (!session) {
    return null
  }

  const handleClick = async () => {
    setLoading(true)
    isInWishList(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  return (
    <Button
      onClick={handleClick}
      icon={
        loading ? (
          <Spinner />
        ) : isInWishList(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  )
}
export default WishlistButton
