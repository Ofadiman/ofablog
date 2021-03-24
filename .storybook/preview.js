import { GlobalStyle } from '../styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { darkTheme } from '../styles/themes/darkTheme'
import { lightTheme } from '../styles/themes/lightTheme'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
))

addDecorator(withThemesProvider([lightTheme, darkTheme], ThemeProvider));
