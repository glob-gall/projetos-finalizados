import { screen } from '@testing-library/react'
import { RenderWithTheme } from 'utils/test/helpers'

import GameItem, { GameItemProps, PaymentInfoProps } from '.'

const props: GameItemProps = {
  img: 'img/source',
  title: 'Game Title',
  price: 'R$ 200,00'
}

describe('<GameItem />', () => {
  it('should render the heading', () => {
    RenderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /Game Title/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Game Title' })).toHaveAttribute(
      'src',
      'img/source'
    )
    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()
  })

  it('should render with download link', () => {
    const downloadLink = 'htpps://downloadlink.com/link'
    RenderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      number: '**** **** **** 2222',
      flag: 'mastercard',
      img: '/img/mastercard.png',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:35'
    }

    RenderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
