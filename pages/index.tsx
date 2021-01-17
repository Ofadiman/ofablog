import Head from 'next/head'
import React, { ReactNode } from 'react'

import { Home } from '../components/templates/Home/Home'

export default function HomePage(): ReactNode {
  return (
    <>
      <Head>
        <title>{'Ofablog'}</title>
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <Home Footer={() => <footer>{'footer'}</footer>} Header={() => <header>{'header'}</header>}>
        <div>{'home'}</div>
      </Home>
    </>
  )
}
