import { ReactNode } from 'react'

export type IconButtonProps = {
  children: ReactNode
  className?: string
  onPress: () => void
  size: 'large' | 'medium' | 'small'
}

export type WrapperProps = Pick<IconButtonProps, 'size'>
