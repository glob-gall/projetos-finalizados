import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black label by default', () => {
    RenderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a WHITE LABEL', () => {
    RenderWithTheme(<Heading color="white">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa'
    })
  })
  it('should render a border left if have the property lineLeft', () => {
    RenderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      borderLeft: '0.7rem solid #F231A5'
    })
  })
  it('should render a line in bottom if have the property lineBottom', () => {
    RenderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with small size', () => {
    RenderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })
})
