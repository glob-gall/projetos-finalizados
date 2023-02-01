import Auth from 'templates/Auth'
import FormForgotPassword from 'templates/FormForgotPassword'

function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}

export default ForgotPassword
