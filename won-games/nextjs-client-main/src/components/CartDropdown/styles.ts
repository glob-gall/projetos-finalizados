import styled from 'styled-components'

import { Wrapper as CartWrapper } from 'components/CartList/styles'
import { Wrapper as EmptyWrapper } from 'components/Empty/styles'

export const Wrapper = styled.main`
  ${CartWrapper},${EmptyWrapper} {
    width: 56rem;
  }
`
