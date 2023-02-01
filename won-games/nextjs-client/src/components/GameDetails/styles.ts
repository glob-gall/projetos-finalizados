import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
  `}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.greaterThan('large')`
    grid-template-columns: repeat(6, 1fr);
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    & + & {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
