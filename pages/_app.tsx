import createCache from '@emotion/cache'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { ReactNode, useEffect } from 'react'

import { theme } from '../styles/theme'

export const cache = createCache({ key: 'css', prepend: true })

export default function App({ Component: Page, pageProps }: AppProps): ReactNode {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.remove()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{'Ofablog'}</title>
        <link href={'/icons/logo.svg'} rel={'icon'} />
        <meta content={'initial-scale=1.0, width=device-width'} name={'viewport'} />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Page {...pageProps} />
      </MuiThemeProvider>
    </>
  )
}
