import createCache from '@emotion/cache'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import withDarkMode, { useDarkMode } from 'next-dark-mode'
import React, { ReactNode, useEffect } from 'react'

import { PageLayoutContainer } from '../containers/PageLayout/PageLayout.container'
import { GlobalStyles } from '../styles/GlobalStyles'
import { DARK_THEME, LIGHT_THEME } from '../styles/themes'

export const cache = createCache({ key: 'css', prepend: true })

function App({ Component: Page, pageProps }: AppProps): ReactNode {
  const { darkModeActive: isDarkModeOn } = useDarkMode()

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
      <MuiThemeProvider theme={isDarkModeOn ? DARK_THEME : LIGHT_THEME}>
        <GlobalStyles />
        <CssBaseline />
        <PageLayoutContainer>
          <Page {...pageProps} />
        </PageLayoutContainer>
      </MuiThemeProvider>
    </>
  )
}

export default withDarkMode(App)
