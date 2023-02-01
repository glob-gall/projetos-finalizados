import media, { DefaultBreakpoints } from 'styled-media-query'
import styled, { css } from 'styled-components'

type breakpoint = keyof DefaultBreakpoints

type MediaMatchProps = {
  greaterThan?: breakpoint
  lessThan?: breakpoint
}

const MediaMatchModifiers = {
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display:block;
    `}
  `,
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display:block;
    `}
  `
}

const MediaMatch = styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!greaterThan && MediaMatchModifiers.greaterThan(greaterThan)}
    ${!!lessThan && MediaMatchModifiers.lessThan(lessThan)}
  `}
`

export default MediaMatch
