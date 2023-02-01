import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = { color: 'black' | 'white' }

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
    .thumb_img {
      height: 18rem;
    }

    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      cursor: pointer;
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }
    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
type ModalProps = {
  isOpen: boolean
}
const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};
    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 80%);
  max-height: 80rem;
`
