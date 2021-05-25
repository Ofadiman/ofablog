import { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

export type LinkProps = NextLinkProps & {
  children: ReactNode
  className?: string
}
