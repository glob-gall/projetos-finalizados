import { Story, Meta } from '@storybook/react/types-6-0'
import Gallery, { GalleryProps } from '.'

const items = [
  {
    src: 'https://source.unsplash.com/user/willianjusten/1042x580',
    label: 'label 1'
  },
  {
    src: 'https://source.unsplash.com/user/willianjusten/1080x580',
    label: 'label 2'
  },
  {
    src: 'https://source.unsplash.com/user/willianjusten/520x580',
    label: 'label 3'
  },
  {
    src: 'https://source.unsplash.com/user/willianjusten/1042x520',
    label: 'label 4'
  },
  {
    src: 'https://source.unsplash.com/user/willianjusten/520x520',
    label: 'label 5'
  }
]

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ margin: '10rem 5rem' }}>
    <Gallery {...args} />
  </div>
)
