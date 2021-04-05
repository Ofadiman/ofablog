import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { Header } from '../components/organisms/Header/Header'
import { Home } from '../components/templates/Home/Home'
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
        <Home
          Footer={
            <footer>
              <div style={{ backgroundColor: 'red', height: 200 }}>{'Footer content'}</div>
            </footer>
          }
          Header={<Header />}
        >
          <Page {...pageProps} />
        </Home>
      </ThemeProvider>
    </>
  )
}
