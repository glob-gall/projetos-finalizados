import 'match-media-match'
import { render, screen } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>slide 1</p>
        <p>slide 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/slide 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
    expect(
      screen.getByText(/slide 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
