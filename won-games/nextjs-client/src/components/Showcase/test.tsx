import 'match-media-mock'

import { screen } from '@testing-library/react'
// import RenderWithTheme from ''

import Showcase from '.'
import { RenderWithTheme } from 'utils/test/helpers'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    RenderWithTheme(<Showcase title="Showcase" />)

    expect(
      screen.getByRole('heading', { name: /Showcase/i })
    ).toBeInTheDocument()
  })
})
