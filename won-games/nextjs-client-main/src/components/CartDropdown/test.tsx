import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import CartDropdown from '.'
import CartListMock from '__mocks__/CartList'

describe('<CartDropdown />', () => {
  it('should render the the cartIcon and the items', () => {
    RenderWithTheme(<CartDropdown {...CartListMock} />)

    expect(screen.getByText(`${CartListMock.items.length}`)).toBeInTheDocument()
    expect(screen.getByText(/red dead redemption 2/i)).toHaveLength(2)
    expect(screen.getByText(/r\$ 440,00/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })
  it('should render empty is there are no games', () => {
    RenderWithTheme(<CartDropdown />)

    expect(
      screen.queryByText(`${CartListMock.items.length}`)
    ).not.toBeInTheDocument()

    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument()
  })
})
