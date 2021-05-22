import { ThemeProvider } from '@material-ui/core'
import { render, RenderResult } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'

import { theme } from '../../styles/theme'

export const Wrapper: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export const renderComponent = (ui: ReactElement): RenderResult => {
  return { ...render(ui, { wrapper: Wrapper }) }
}
