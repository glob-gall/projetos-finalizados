import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from '../../utils/test/helpers'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    RenderWithTheme(<FormSignIn />)
  })
})
