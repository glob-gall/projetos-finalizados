import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'

export default {
  title: 'Games/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <GameDetails {...args} />
)

Default.args = {
  developer: 'Different Tales',
  publisher: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}
