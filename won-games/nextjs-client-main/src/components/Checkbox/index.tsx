import { InputHTMLAttributes, useState, useCallback } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  isChecked?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'black',
  onCheck,
  isChecked = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = useCallback(() => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }, [checked, onCheck])

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        {...props}
        checked={checked}
      />
      {label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
