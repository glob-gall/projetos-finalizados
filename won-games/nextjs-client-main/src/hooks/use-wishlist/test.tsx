import { MockedProvider } from '@apollo/client/testing'
import { waitFor } from '@testing-library/dom'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import {
  CreateWishlistMock,
  UpdateWishlistMock,
  RemoveWishlistMock,
  wishlistItems,
  wishlistMock
} from '__mocks__/wishlist'
import { useWishlist, WishlistProvider } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: 'valid-jwt', user: { email: 'valid@email.com' } }
useSession.mockImplementation(() => [session])

describe('wishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1]
    ])
  })

  it('should check inInWishlist()', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.isInWishList('1')).toBe(true)
    expect(result.current.isInWishList('2')).toBe(true)
    expect(result.current.isInWishList('3')).toBe(false)
  })

  it('should add item in wishlist creating new list', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[CreateWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitForNextUpdate()
    expect(result.current.items).toStrictEqual([wishlistItems[2]])
  })

  it('should update the current wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[UpdateWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    act(() => {
      result.current.addToWishlist('3')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual(wishlistItems)
    })
  })

  it('should remove intem from the current wishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MockedProvider mocks={[RemoveWishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishlist(), {
      wrapper
    })

    await waitForNextUpdate()

    act(() => {
      result.current.removeFromWishlist('1')
    })

    await waitFor(() => {
      expect(result.current.items).toStrictEqual([wishlistItems[1]])
    })
  })
})
