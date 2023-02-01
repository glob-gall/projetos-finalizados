import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from '../Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import CartIcon from 'components/CartIcon'
import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <a>
            <Logo hiddeOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuWrapper>
            <S.IconWrapper>
              <Link href="/search">
                <a>
                  <SearchIcon aria-label="Search" />
                </a>
              </Link>
            </S.IconWrapper>

            <S.IconWrapper>
              <MediaMatch greaterThan="medium">
                <CartDropdown />
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Link href="/wishlist">
                  <a>
                    <CartIcon aria-label="Open Shopping Cart" />
                  </a>
                </Link>
              </MediaMatch>
            </S.IconWrapper>

            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/signin" passHref>
                  <Button as="a">Sign In</Button>
                </Link>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuWrapper>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            />
            <S.MenuNav>
              <S.MenuLink href="/">Home</S.MenuLink>
              <S.MenuLink href="/games">Explore</S.MenuLink>
              {!!username && (
                <>
                  <S.MenuLink href="/profile/me">My profile</S.MenuLink>
                  <S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
                </>
              )}
            </S.MenuNav>
            {!username && (
              <S.RegisterBox>
                <Link href="/signin">
                  <Button fullWidth size="large">
                    Log in now
                  </Button>
                </Link>
                <span>or</span>
                <Link href="/signup">
                  <S.CreateACount href="" title="Sign Up">
                    Sign Up
                  </S.CreateACount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
