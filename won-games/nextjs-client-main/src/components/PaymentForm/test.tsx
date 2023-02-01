import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RenderWithTheme } from 'utils/test/helpers'

import PaymentOptions, { PaymentOptionsProps } from '.'

const props: PaymentOptionsProps = {
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
}

describe('<PaymentOptions />', () => {
  it('should render the properly', () => {
    RenderWithTheme(<PaymentOptions {...props} />)

    expect(screen.getByText(/2345/)).toBeInTheDocument()
    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
  it('should handle select card when clicking on the label', async () => {
    const handlePayment = jest.fn()
    RenderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)

    userEvent.click(screen.getByLabelText(/2345/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /2345/ })).toBeChecked()
    })
  })
  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    RenderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/ }))
    expect(handlePayment).not.toHaveBeenCalled()
  })
})
