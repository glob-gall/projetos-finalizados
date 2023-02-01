import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
    padding: ${theme.spacings.small};
      display:flex;
      justify-content:space-between;
      align-items:center;
    `}
  `}
`

export const GameContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  flex-shrink: 0;
  margin-right: 1.2rem;
  width: 9.6rem;
  height: 5.6rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('medium')`
    width: 15rem;
    height: 7rem;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    line-height: ${theme.font.sizes.small};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin-bottom: 0.4rem;

    ${media.greaterThan('medium')`
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: 0.2rem ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`
export const Download = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    margin-top: ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: column;

    ${media.greaterThan('medium')`
      margin-top: 0;
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    `}
  `}
`
export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }
    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`
