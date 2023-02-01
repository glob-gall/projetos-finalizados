import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'normal'

export type RibbonProps = {
  children: React.ReactNode
  size?: RibbonSizes
  color?: RibbonColors
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Ribbon
