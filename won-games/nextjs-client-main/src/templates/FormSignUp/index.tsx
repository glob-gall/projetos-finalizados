/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import {
  Email,
  Lock,
  AccountCircle,
  ErrorOutline
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    username: '',
    password: ''
  })
  const [createUser, { error }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/ '
        })
    }
  })

  const handeSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signUpValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({})

    createUser({
      variables: {
        input: {
          email: values.email,
          username: values.username,
          password: values.password
        }
      }
    })
    setLoading(false)
  }
  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handeSubmit}>
        <TextField
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v)}
          name="username"
          placeholder="Name"
          icon={<AccountCircle />}
        />
        <TextField
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          name="email"
          placeholder="Email"
          icon={<Email />}
        />
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
          placeholder="Confirm_password"
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>
      </form>
      <FormLink>
        Already have an account?{' '}
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
      </FormLink>
    </FormWrapper>
  )
}

export default FormSignUp
