import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns:32rem 1fr;
      grid-gap:${theme.grid.gutter};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-top: 0.1rem solid ${theme.colors.lightGray};
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`
