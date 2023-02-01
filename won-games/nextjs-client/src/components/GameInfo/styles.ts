import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    background: #fff;
    padding: ${theme.spacings.small};

    ${RibbonStyles.Wrapper} {
      right: -1rem;
      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small} ${theme.spacings.xlarge};

    `}
    ${media.greaterThan('medium')`
    ${RibbonStyles.Wrapper}{
      right:${theme.spacings.small};
      top:${theme.spacings.small};
      right:${theme.font.sizes.large};
      &:before{
        border:none;
      }
    }
    `}
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      max-width:77rem;
    `}
  `}
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan('medium')`
      flex-direction:row-reverse;
      width:initial;
      justify-content: flex-start;
    `}
`
