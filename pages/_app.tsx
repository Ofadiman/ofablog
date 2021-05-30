import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Fragment, ReactElement, ReactNode, useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

import { PageLayoutContainer } from '../containers/PageLayout/PageLayout.container'
import { GlobalStyles } from '../styles/GlobalStyles'
import { DARK_THEME, LIGHT_THEME } from '../styles/themes'

const Providers = ({ children }: { children: ReactNode }): ReactElement | null => {
  const { value: isDarkModeActive } = useDarkMode()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ThemeProvider theme={isDarkModeActive ? DARK_THEME : LIGHT_THEME}>
      <GlobalStyles />
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default function App({ pageProps, Component: Page }: AppProps): ReactElement {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.remove()
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>{'Ofablog'}</title>
        <link href={'/icons/logo.svg'} rel={'icon'} />
        <meta content={'initial-scale=1.0, width=device-width'} name={'viewport'} />
      </Head>
      <Providers>
        <PageLayoutContainer>
          <Page {...pageProps} />
        </PageLayoutContainer>
      </Providers>
    </Fragment>
  )
}
