import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${theme.colors.white};
  `}
`

export const SuccessTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    `}
  `}
`
export const Done = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small};
    width: 6rem;
    height: 6rem;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.primary};
    border-radius: 50%;
    svg {
      width: 100%;
    }
    ${media.lessThan('medium')`
    width: 4rem;
    height: 4rem;
    padding: .4rem;
    `}
  `}
`
export const SuccessSubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    ${media.lessThan('medium')`
      font-size:${theme.font.sizes.small};
    `}
  `}
`
export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
  `}
`
