import NextLink from 'next/link'
import React, { ReactElement } from 'react'

import { LinkProps } from './Link.component.types'

export const Link = ({ className, children, ...nextLinkProps }: LinkProps): ReactElement | null => {
  return (
    <NextLink {...nextLinkProps}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
