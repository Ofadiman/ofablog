import * as Image from 'next/image'
import { ThemeProvider } from '@material-ui/core'
import { addDecorator } from '@storybook/react'
import { theme } from '../styles/theme'

Object.defineProperty(Image, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />
  }
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
))
