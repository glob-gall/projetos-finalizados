import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentIntent } from '@stripe/stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import { useCart } from 'hooks/use-cart'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'
import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })
        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
        } else {
          setFreeGames(false)
          setClientSecret(data.client_secret)
        }
      }
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })
    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      saveOrder()
      push('/success')
      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      saveOrder(payload.paymentIntent)
      // setSucceeded(true)
      push('/success')
    }
  }

  return (
    <S.Container>
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <Heading lineColor="primary" size="small" lineBottom>
            Payment
          </Heading>
          {freeGames ? (
            <S.FreeGames>No payment required.</S.FreeGames>
          ) : (
            <S.CardContainer>
              <CardElement
                options={{
                  hidePostalCode: true,
                  style: {
                    base: {
                      fontSize: '16px'
                    }
                  }
                }}
                onChange={handleChange}
              />
              {error && (
                <S.Error>
                  <ErrorOutline /> {error}
                </S.Error>
              )}
            </S.CardContainer>
          )}
          <S.ButtonSection>
            <Button size="small" minimal fullWidth>
              Continue Shopping
            </Button>
            <Button
              size="small"
              icon={loading ? <FormLoading /> : <ShoppingCart />}
              fullWidth
              disabled={!freeGames && (disabled || !!error)}
            >
              {!loading && <span>Buy now</span>}
            </Button>
          </S.ButtonSection>
        </form>
      </S.Wrapper>
    </S.Container>
  )
}

export default PaymentForm
