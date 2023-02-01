import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the Banner', () => {
    RenderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/games/defy-death'
    )
  })

  it('should render the image', () => {
    RenderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )
  })

  it('should render with a Ribbon', () => {
    RenderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
        ribbonText="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
