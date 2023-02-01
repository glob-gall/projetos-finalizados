import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required().min(6),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }
  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  const validation = schema.validate(values, { abortEarly: false })
  return getFieldErrors(validation)
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function siginInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  const validation = schema.validate(values, { abortEarly: false })

  return getFieldErrors(validation)
}

type ForgotValues = Pick<UsersPermissionsRegisterInput, 'email'>
export function forgotValidate(values: ForgotValues) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  const validations = schema.validate(values)

  return getFieldErrors(validations)
}

type resetValues = {
  password: string
  confirm_password: string
}
export function resetValidate(values: resetValues) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({
    password,
    confirm_password
  })
  const validation = schema.validate(values, { abortEarly: false })

  return getFieldErrors(validation)
}
