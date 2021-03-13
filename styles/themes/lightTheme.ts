import { DefaultTheme } from 'styled-components'

import { mediaQueries } from '../constants/mediaQueries'
import { typography } from '../constants/typography'
import { zIndex } from '../constants/zIndex'

export const lightTheme: DefaultTheme = {
  mediaQueries,
  palette: {
    background: '#ffffff',
    error: {
      contrastText: '#ffffff',
      dark: '#d32f2f',
      light: '#e57373',
      main: '#f44336'
    },
    info: {
      contrastText: '#ffffff',
      dark: '#1976d2',
      light: '#64b5f6',
      main: '#2196f3'
    },
    primary: {
      contrastText: '#ffffff',
      dark: '#2d0042',
      hover: '#2E0044',
      light: '#9b47c2',
      main: '#7901B1',
      outline: '#b17ccd'
    },
    secondary: {
      contrastText: '#ffffff',
      dark: '#7d7d7d',
      light: '#d8d8d8',
      main: '#b0b0b0'
    },
    success: {
      contrastText: '#ffffff',
      dark: '#388e3c',
      light: '#81c784',
      main: '#4caf50'
    },
    typography: {
      dark: '#000000',
      light: '#5c5c5c',
      main: '#3d3d3d'
    },
    warning: {
      contrastText: '#ffffff',
      dark: '#f57c00',
      light: '#ffb74d',
      main: '#ff9800'
    }
  },
  typography,
  zIndex
}
