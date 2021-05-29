import { orange, purple } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const LIGHT_THEME = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple['500']
    },
    secondary: {
      main: orange['500']
    }
  },
  spacing: 4
})

export const DARK_THEME = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple['500']
    },
    secondary: {
      main: orange['500']
    }
  },
  spacing: 4
})
