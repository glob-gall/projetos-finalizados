import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  error,
  name,
  initialValue = '',
  disabled = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
          disabled={disabled}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
