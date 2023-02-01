import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import CartList from '.'

jest.mock('components/GameItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Game Item Mock">GameItem Mock</div>
  }
}))

const props = {
  items: [
    {
      img: '/img/Background.png',
      title: 'Red Read Redemption 2',
      price: 'R$ 220,00'
    },
    {
      img: '/img/Background.png',
      title: 'Red Read Redemption 2',
      price: 'R$ 220,00'
    }
  ],
  total: 'R$ 440,00'
}

describe('<CartList />', () => {
  it('should render all components', () => {
    RenderWithTheme(<CartList {...props} />)

    expect(screen.getAllByTestId('Game Item Mock')).toHaveLength(2)

    expect(screen.getByRole('text', { name: props.total })).toBeInTheDocument()
  })
  it('should render with button', () => {
    RenderWithTheme(<CartList {...props} hasButton />)

    expect(screen.getByRole('button', { name: /buy now/i })).toBeInTheDocument()
  })
})
