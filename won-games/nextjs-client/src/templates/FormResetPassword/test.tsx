import 'server.mock'
import { signIn } from 'next-auth/client'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => {
  query
})
jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword/>', () => {
  it('should render the form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /reset password/i })
    ).toBeInTheDocument()
  })

  it('should show validation errors', async () => {
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/password/i), '123456')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '123455')

    expect(await screen.findByText(/confirm password does not match/i))
  })

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong-code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/password/i), '123456')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '123456')

    await userEvent.click(
      screen.getByRole('button', { name: /reset password/i })
    )

    expect(
      await screen.findByText(/Incorrect code provided/i)
    ).toBeInTheDocument()
  })

  it('should reset the password and signIn the user', async () => {
    query = { code: 'whatever-code' }
    render(<FormResetPassword />)

    await userEvent.type(screen.getByPlaceholderText(/password/i), '123456')
    await userEvent.type(screen.getByPlaceholderText(/confirm/i), '123456')

    await userEvent.click(
      screen.getByRole('button', { name: /reset password/i })
    )

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123456',
        callbackUrl: '/'
      })
    })
  })
})
