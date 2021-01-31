import { AppProps } from 'next/app'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/GlobalStyle'
import { lightTheme } from '../styles/themes/lightTheme'

export default function MyApp({ Component: Page, pageProps }: AppProps): ReactNode {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Page {...pageProps} />
    </ThemeProvider>
  )
}
