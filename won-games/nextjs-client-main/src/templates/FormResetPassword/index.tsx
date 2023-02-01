/* eslint-disable react/no-unescaped-entities */
import { Lock, ErrorOutline } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { FormWrapper, FormLoading, FormError } from 'components/Form'
import TextField from 'components/TextField'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FieldErrors, resetValidate } from 'utils/validations'
import { signIn } from 'next-auth/client'

const FormResetPassword = () => {
  const { query } = useRouter()
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    password: '',
    confirm_password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirm_password,
          code: query.code
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      setLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }

    setLoading(false)
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
          error={fieldError?.password}
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          name="password"
          placeholder="Password"
          icon={<Lock />}
        />
        <TextField
          error={fieldError?.confirm_password}
          type="password"
          onInputChange={(v) => handleInput('confirm_password', v)}
          placeholder="Confirm password"
          icon={<Lock />}
        />
        <Button type="submit" fullWidth size="large" disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
