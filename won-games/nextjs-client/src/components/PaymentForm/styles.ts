import styled, { css } from 'styled-components'
import * as HeadingStyle from 'components/Heading/styles'

export const Container = styled.div``

export const Wrapper = styled.div`
  form {
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${({ theme }) => css`
    background: ${theme.colors.white};

    ${HeadingStyle.Wrapper} {
      margin: ${theme.spacings.xsmall};
    }
  `}
`

export const CardsList = styled.div`
  margin-top: auto;
`

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    img {
      margin-right: ${theme.spacings.xxsmall};
    }

    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const AddNewCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      margin-right: ${theme.spacings.xsmall};
    }

    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const ButtonSection = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall};
  `}
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const CardContainer = styled.div`
  margin: 0 2rem;
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    padding-top: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;

    svg {
      width: 2rem;
      margin-right: 0.5rem;
    }
  `}
`

export const FreeGames = styled.p`
  ${({ theme }) => css`
    margin: 0 2rem;
    color: ${theme.colors.black};
  `}
`
