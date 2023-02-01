import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a Logo with white label', () => {
    RenderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render a Logo with black label', () => {
    RenderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a bigger size Logo', () => {
    RenderWithTheme(<Logo color="black" size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal size Logo', () => {
    RenderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })
  it('should render without text in mobile if hideOnMobile', () => {
    RenderWithTheme(<Logo color="black" hiddeOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
  it('should render with id', () => {
    const { container } = RenderWithTheme(<Logo id="my_id" />)

    expect(container.querySelector('#my_id')).toBeInTheDocument()
  })
})
