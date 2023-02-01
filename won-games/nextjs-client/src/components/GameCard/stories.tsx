import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard from '.'

import { gameCardProps } from '.'

export default {
  title: 'Games/GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    slug: 'population-zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    favorite: {
      type: 'boolean'
    },
    onFav: {
      action: 'clicked'
    },
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<gameCardProps> = (args) => <GameCard {...args} />
