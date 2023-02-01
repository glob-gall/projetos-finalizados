import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    RenderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  }),
    it('should render with badge', () => {
      RenderWithTheme(<CartIcon quantity={4} />)

      expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
      expect(screen.getByText('4')).toBeInTheDocument()
    })
})
