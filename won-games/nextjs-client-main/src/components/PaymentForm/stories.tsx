import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions, { PaymentOptionsProps } from '.'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: [
      {
        flag: 'visa',
        img: './img/visa.png',
        number: '**** **** **** 1234'
      },
      {
        flag: 'mastercard',
        img: './img/master-card.png',
        number: '**** **** **** 2345'
      }
    ],
    handlePayment: () => console.log('hello')
  } as PaymentOptionsProps,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: {
      action: 'click'
    }
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)
