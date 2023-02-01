import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { gameInfoProps } from '.'

export default {
  title: 'Games/GameInfo',
  component: GameInfo,
  args: {
    name: 'Resident evil',
    price: 'R$ 124,80',
    description:
      'Over fifteen years since the destruction of Raccoon City In the face of the continuing threat posed by bioterrorism, the president of the United States decides to finally shed light on the truth of what happened in Raccoon Citys final days. On the day of his speech, a bioterrorist attack rocks the seminar hall--and the truth is swallowed in darkness.'
  }
} as Meta

export const Default: Story<gameInfoProps> = (args) => <GameInfo {...args} />
