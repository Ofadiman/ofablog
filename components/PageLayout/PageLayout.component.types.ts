import { ReactNode } from 'react'

export type PageLayoutProps = {
  Footer: JSX.Element
  Header: JSX.Element
  children: ReactNode
  className?: string
}
