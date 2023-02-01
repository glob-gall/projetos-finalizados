import Auth from 'templates/Auth'
import FormResetPassword from 'templates/FormResetPassword'

function ResetPassword() {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  )
}

export default ResetPassword
