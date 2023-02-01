import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

//Omit
export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    cursor: not-allowed;
    filter: saturate(30%);
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    color: ${theme.colors.white};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    &:focus {
      outline: 1px dashed;
    }

    text-decoration: none;
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    transition: background-color 0.2s;

    ${!minimal &&
    css`
      &:hover {
        background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
      }
    `}

    padding: ${theme.spacings.xxsmall};
    ${!!size && wrapperModifiers[size!](theme)}

    ${!!fullWidth && wrapperModifiers.fullWidth}

    ${hasIcon && wrapperModifiers.withIcon(theme)}

    ${minimal && wrapperModifiers.minimal(theme)}

    ${disabled && wrapperModifiers.disabled()}
  `}
`
