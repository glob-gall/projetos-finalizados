import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper isOpen={open}>
      <S.Title onClick={() => setOpen((state) => !state)}>{title}</S.Title>
      <S.Content aria-hidden={!open}>{children}</S.Content>
      {open && <S.Overlay aria-hidden={!open} onClick={() => setOpen(false)} />}
    </S.Wrapper>
  )
}

export default Dropdown
