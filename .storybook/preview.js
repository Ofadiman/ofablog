import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
))
