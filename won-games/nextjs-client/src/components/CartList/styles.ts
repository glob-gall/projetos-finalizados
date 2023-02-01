import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as EmptyStyles from 'components/Empty/styles'

type WrapperProps = {
  isEmpty: boolean
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }
      ${EmptyStyles.Image} {
        max-width: 20rem;
      }
      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }
      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size:${theme.font.sizes.medium};
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    `}

    >span {
      color: ${theme.colors.primary};
    }
  `}
`
