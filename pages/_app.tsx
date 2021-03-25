import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/organisms/Header/Header'
import { GlobalStyle } from '../styles/GlobalStyle'
import { lightTheme } from '../styles/themes/lightTheme'

export default function App({ Component: Page, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <title>{'Ofablog'}</title>
        <link href={'/icons/logo.svg'} rel={'icon'} />
        <meta content={'initial-scale=1.0, width=device-width'} name={'viewport'} />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Header />
        <main style={{ height: 5000 }}>
          <Page {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
