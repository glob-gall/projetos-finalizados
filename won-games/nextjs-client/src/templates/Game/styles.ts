import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import Container from 'components/Container'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    background-image: url(${src});
    height: 39.5rem;
    width: 100%;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    opacity: 0.4;

    background-size: cover;
    background-position: top center;

    ${media.greaterThan('medium')`
      height:60rem;

      clip-path:polygon(0 0, 100% 0, 100% 100%, 0 85%);

    }
    `}
  `}
`
const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.xlarge});
    ${media.greaterThan('medium')`
      margin-top: calc(${theme.spacings.xlarge} * 5);
    `}
  `}
`

export const SectionGallery = styled(Section)`
  ${media.lessThan('medium')`
      display: none;
    `}
`

export const SectionContent = styled(Section)``

export const SectionGameDetails = styled(Section)``
