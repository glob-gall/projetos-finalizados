import Image from 'next/image'
import Button from 'components/Button'
import * as S from './styles'
import Ribbon from '../Ribbon'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string

  ribbonText?: string
  ribbonColor?: 'primary' | 'secondary'
  ribbonSize?: 'small' | 'normal'
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbonText,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image src={img} aria-label={title} layout="fill" objectFit="cover" />
    </S.ImageWrapper>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
    {!!ribbonText && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}
  </S.Wrapper>
)

export default Banner
