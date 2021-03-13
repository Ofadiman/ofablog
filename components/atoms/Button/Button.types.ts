import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  className?: string
  leftIcon?: JSX.Element
  onPress: () => void
  rightIcon?: JSX.Element
}
