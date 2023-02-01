import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns:Contact us, Follow us, Links and Location', () => {
    RenderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })
})
