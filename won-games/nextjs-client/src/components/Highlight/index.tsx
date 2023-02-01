import Image from 'next/image'
import Button from '../Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImg?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImg,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} data-cy="highlight">
    <Image src={backgroundImage} layout="fill" objectFit="cover" />
    {!!floatImg && <S.FloatImage src={floatImg} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
