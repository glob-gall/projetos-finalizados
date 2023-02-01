import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'Games/GameItem',
  component: GameItem,
  args: {
    img: '/img/Background.png',
    title: 'Red Read Redemption 2',
    price: 'R$ 220,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'download/game',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 2222',
    purchaseDate: 'Purchased on 21/12/2020 at 21:22'
  }
}
