import '../styles/globals.css'

import { AppProps } from 'next/app'
import React, { ReactNode } from 'react'

export default function MyApp({ Component: Page, pageProps }: AppProps): ReactNode {
  return <Page {...pageProps} />
}
