import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function FirstPost(): ReactNode {
  return (
    <div>
      <h1>{'First Post'}</h1>
      <Link href={'/'}>{'go to index'}</Link>
    </div>
  )
}
