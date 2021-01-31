import { DefaultTheme } from 'styled-components'

import { mediaQueries } from '../constants/mediaQueries'
import { typography } from '../constants/typography'
import { zIndex } from '../constants/zIndex'

export const lightTheme: DefaultTheme = {
  mediaQueries,
  palette: {
    background: 'white',
    error: {
      dark: '',
      light: '',
      main: ''
    },
    info: {
      dark: '',
      light: '',
      main: ''
    },
    primary: {
      dark: 'rgba(46, 0, 68, 1)',
      light: 'rgba(154, 70, 193, 1)',
      main: 'rgba(121, 1, 177, 1)'
    },
    secondary: {
      dark: 'rgba(125, 125, 125, 1)',
      light: 'rgba(216, 216, 216, 1)',
      main: 'rgba(176, 176, 176, 1)'
    },
    success: {
      dark: '',
      light: '',
      main: ''
    },
    typography: {
      dark: '',
      disabled: '',
      light: '',
      main: 'hsl(0, 0%, 13%)'
    },
    warning: {
      dark: '',
      light: '',
      main: ''
    }
  },
  typography,
  zIndex
}
