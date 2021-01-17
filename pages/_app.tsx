import { AppProps } from 'next/app'
import React, { ReactNode } from 'react'

import { GlobalStyle } from '../styles/GlobalStyle'

export default function MyApp({ Component: Page, pageProps }: AppProps): ReactNode {
  return (
    <>
      <GlobalStyle />
      <Page {...pageProps} />
    </>
  )
}
