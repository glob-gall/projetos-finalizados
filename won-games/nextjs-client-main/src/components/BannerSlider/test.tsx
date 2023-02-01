import 'match-media-mock'
import { screen } from '@testing-library/react'

import BannerSlider from '.'
import { RenderWithTheme } from 'utils/test/helpers'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = RenderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  })
  it('should render with one active item', () => {
    const { container } = RenderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-vertical')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: 'defy death 1', hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'defy death 2', hidden: true })
    ).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the dots', () => {
    RenderWithTheme(<BannerSlider items={items} />)

    expect(screen.getAllByRole('button', { name: /1|2/i })).toHaveLength(2)
    expect(screen.getByRole('button', { name: /1/i })).toHaveClass(
      'slick-active'
    )
  })
})
