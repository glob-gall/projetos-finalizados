import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ padding: '5rem 8rem' }}>
    <Banner {...args} />
  </div>
)
export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ padding: '5rem 0rem' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbonText: 'My ribbon',
  ribbonColor: 'secondary',
  ribbonSize: 'small'
}
