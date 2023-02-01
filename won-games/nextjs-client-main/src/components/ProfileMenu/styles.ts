import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;

    flex-basis: content;
    ${media.greaterThan('medium')`
      flex-direction: column;
      border:0;
    `}
  `}
`

const linkModifier = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}
type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    text-decoration: none;

    span {
      margin-left: ${theme.spacings.xxsmall};
    }
    transition: 0.4s ease;
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    & + & {
      border-top: 0.1rem solid ${theme.colors.lightGray};
    }

    ${media.lessThan('medium')`
    flex:1;
    justify-content:center;
    & + & {
      border-top:none;
      border-left: 0.1rem solid ${theme.colors.lightGray};
    }

      span{
        display:none;
      }
    `}

    ${!isActive && linkModifier.default(theme)}
    ${isActive && linkModifier.active(theme)}
  `}
`
