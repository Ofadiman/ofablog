import { ThemeProvider } from '@material-ui/core'
import { render, RenderResult } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'

import { LIGHT_THEME } from '../../styles/themes'

export const Wrapper: FC = ({ children }) => <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>

export const renderComponent = (ui: ReactElement): RenderResult => {
  return { ...render(ui, { wrapper: Wrapper }) }
}
