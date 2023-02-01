import { Story, Meta } from '@storybook/react/types-6-0'
import GameCardsMock from '__mocks__/GameCardsMock'
import { gameCardProps } from 'components/GameCard'
import GameCardSlider from '.'

const items = GameCardsMock

export default {
  title: 'Games/GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<gameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
