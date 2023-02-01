import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import TextContent from '.'

const props = {
  title: 'Text Content Title',
  content: '<h1>Description</h1>'
}

describe('<TextContent />', () => {
  it('should render the heading', () => {
    RenderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', { name: /Text Content Title/i })

    expect(wrapper).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(wrapper).toHaveStyle({ color: '#FAFAFA' })
    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width:768)'
    })
  })
})
