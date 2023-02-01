import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type headingProps = {
  color?: 'black' | 'white'
  children?: React.ReactNode
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children = 'Title',
  color = 'black',
  lineLeft,
  lineBottom,
  lineColor = 'primary',
  size = 'medium'
}: headingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
