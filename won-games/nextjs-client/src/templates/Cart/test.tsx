import 'match-media-mock'
import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Cart from '.'

const props = {
  items: [
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x140',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    },
    {
      title: 'Population Zero',
      developer: 'Rockstar Games',
      img: 'https://source.unsplash.com/user/willianjusten/300x141',
      price: 'R$ 235,00',
      promotionalPrice: 'R$ 215,00'
    }
  ],
  total: '440,00'
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    RenderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    RenderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
