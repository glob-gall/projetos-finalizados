import {
  forgotValidate,
  siginInValidate,
  signUpValidate,
  resetValidate
} from '.'

describe('validations', () => {
  describe('signInValidate', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(siginInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '123456' }

      expect(siginInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('signUpValidate', () => {
    it('should validate empty fields', () => {
      const values = { username: '', email: '', password: '' }

      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        username: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = { username: 'a', email: '', password: '' }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = { username: '', email: 'invalid-email', password: '' }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return invalid password', () => {
      const values = {
        username: '',
        email: 'invalid-email',
        password: '123456',
        confirm_password: '1234567'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"Confirm password does not match with password"`
      )
    })
  })

  describe('forgotValidate', () => {
    it('should not alllow empty email field', () => {
      const values = { email: '' }
      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" is not allowed to be empty"`
      )
    })
    it('should return an error for invalid email', () => {
      const values = { email: 'invalid-email' }
      expect(forgotValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })
  })

  describe('resetValidate', () => {
    it('should not allow empty fileds', () => {
      const values = {
        password: '',
        confirm_password: ''
      }
      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should validate confirm_password', () => {
      const values = {
        password: '123456',
        confirm_password: ''
      }
      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"Confirm password does not match with password"`
      )
    })
    it('should validate confirm_password when it is diferent', () => {
      const values = {
        password: '123456',
        confirm_password: '123457'
      }
      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"Confirm password does not match with password"`
      )
    })
  })
})
