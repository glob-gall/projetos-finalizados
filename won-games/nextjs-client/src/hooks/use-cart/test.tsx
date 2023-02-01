import { renderHook } from '@testing-library/react-hooks'

import { CartProvider, useCart, useCartContextData } from '.'

describe('useCart', () => {
  it('should return items ant its info if there any in the cart', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    )

    const { result } = renderHook(() => useCart(), { wrapper })
  })
})
