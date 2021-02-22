import { ReactNode } from 'react'

export type TypographyProps = {
  as: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  children: ReactNode
  className?: string
  variant: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'subtitle'
}

export type StyledTypographyProps = Pick<TypographyProps, 'variant'>
