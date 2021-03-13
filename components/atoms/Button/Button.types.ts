import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  className?: string
  leftIcon?: JSX.Element
  onClick: () => void
  rightIcon?: JSX.Element
}
