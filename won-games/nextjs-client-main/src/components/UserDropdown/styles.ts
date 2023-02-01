import styled, { css } from 'styled-components'

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Nav = styled.nav`
  width: 26rem;
  display: flex;
  flex-direction: column;
`
export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.black};
    display: flex;
    align-items: center;

    & + & {
      border-top: 1px solid ${theme.colors.lightGray};
    }
    svg {
      margin-right: ${theme.spacings.xsmall};
    }
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    transition: background-color, color, ${theme.transition.default};
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}
`
