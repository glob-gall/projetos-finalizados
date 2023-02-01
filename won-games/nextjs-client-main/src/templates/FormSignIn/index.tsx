/* eslint-disable react/no-unescaped-entities */
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import Link from 'next/link'

import Button from 'components/Button'
import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FieldErrors, siginInValidate } from 'utils/validations'

type signInType = {
  email: string
  password: string
}

const FormSignIn = () => {
  const routes = useRouter()
  const { push, query } = routes
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<signInType>({
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = siginInValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)
    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          placeholder="Email"
          icon={<Email />}
        />
        <TextField
          error={fieldError?.password}
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          placeholder="Password"
          icon={<Lock />}
        />
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>
        <Button type="submit" fullWidth size="large" disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in Now</span>}
        </Button>
      </form>
      <FormLink>
        Don't have an account?{' '}
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </FormLink>
    </FormWrapper>
  )
}

export default FormSignIn
