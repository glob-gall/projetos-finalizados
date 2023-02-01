import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from '../../styles/theme'

export const RenderWithTheme = (childrens: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{childrens}</ThemeProvider>)
