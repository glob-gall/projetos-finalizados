import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom color="black" lineColor="primary">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue={username}
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue={email}
        disabled
      />
      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium">
            Reset password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
