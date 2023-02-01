import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    position: relative;
  `}
`

export const Badge = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    font-size: 1rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`
