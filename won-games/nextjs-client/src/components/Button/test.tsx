import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'
import 'jest-styled-components'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = RenderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size if use the size small property', () => {
    RenderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
  it('should render the large size if use size large property', () => {
    RenderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should be able to display 100% width if use fullWidth property', () => {
    RenderWithTheme(<Button fullWidth>Full width button</Button>)

    expect(
      screen.getByRole('button', { name: /full width button/i })
    ).toHaveStyle({
      width: '100%'
    })
  })

  it('should be able to render a icon', () => {
    RenderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>buy now</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should be rendered as a link', () => {
    RenderWithTheme(
      <Button as="a" href="/link">
        Won Games Link
      </Button>
    )

    expect(
      screen.getByRole('link', { name: /won games link/i })
    ).toHaveAttribute('href', '/link')
  })
  it('should render a disabled button', () => {
    RenderWithTheme(<Button disabled>Won Games Link</Button>)

    expect(
      screen.getByRole('button', { name: /won games link/i })
    ).toHaveAttribute('disabled', true)
  })
})
