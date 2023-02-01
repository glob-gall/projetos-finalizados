import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render with default props', () => {
    RenderWithTheme(<Ribbon>Won Games</Ribbon>)

    expect(screen.getByText(/won games/i)).toHaveStyle({
      backgroundColor: '#F231A5',
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('shold be able to load with small size and secondary color', () => {
    RenderWithTheme(
      <Ribbon color="secondary" size="small">
        Won Games
      </Ribbon>
    )

    expect(screen.getByText(/won games/i)).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
