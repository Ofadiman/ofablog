import { render, RenderResult } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { lightTheme } from '../../styles/themes/lightTheme'

export const Wrapper: FC = ({ children }) => <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>

export const renderComponent = (ui: ReactElement): RenderResult => {
  return { ...render(ui, { wrapper: Wrapper }) }
}
