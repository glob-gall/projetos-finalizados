import styled, { css, DefaultTheme } from 'styled-components'
import { headingProps, LineColors } from '.'
import media from 'styled-media-query'

export const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
  `}
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.huge};
  `}
  `,

  left: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  bottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      content: '';
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      width: 5rem;

      left: 0;
      bottom: -1rem;
    }
  `
}

export const Wrapper = styled.h2<headingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifier.left(theme, lineColor!)}
    ${lineBottom && wrapperModifier.bottom(theme, lineColor!)}
    ${size && wrapperModifier[size](theme)}
  `}
`
