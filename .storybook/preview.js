import * as Image from 'next/image'
import { ThemeProvider } from '@material-ui/core'
import { addDecorator } from '@storybook/react'
import { LIGHT_THEME } from '../styles/themes'

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
  <ThemeProvider theme={LIGHT_THEME}>
    <Story />
  </ThemeProvider>
))
