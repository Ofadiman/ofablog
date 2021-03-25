import NextLink from 'next/link'
import React, { VFC } from 'react'

import { LinkProps } from './Link.types'

export const Link: VFC<LinkProps> = ({ className, href, children }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
