import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type MenuFullProps = {
  isOpen: boolean
}

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    z-index: ${theme.layers.menu};
    display: flex;
    align-items: center;
    position: relative;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    a {
      color: ${theme.colors.white};
    }
  `}
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    > div {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`

  position: absolute;
  left: 50%;
  transform: translate(-50%);
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    color: ${theme.colors.white};

    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    z-index: ${theme.layers.alwaysOnTop};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    /* opacity: ${isOpen ? 1 : 0}; */
    pointer-events: ${isOpen ? 'all' : 'none'};

    transform: ${isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;

    > svg {
      margin: ${theme.spacings.xsmall};
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;

      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.font.sizes.small};
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateACount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2 rem solid ${theme.colors.primary};
  `}
`
