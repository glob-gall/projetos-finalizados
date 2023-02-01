import styled from 'styled-components'

import * as GameItemStyle from 'components/GameItem/styles'

export const Wrapper = styled.main`
  ${GameItemStyle.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
