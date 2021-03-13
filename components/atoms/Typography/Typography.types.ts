export type TypographyProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  children: string
  className?: string
  variant: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'subtitle'
}

export type StyledTypographyProps = Pick<TypographyProps, 'variant'>

export type GetAsValueOptions = Pick<TypographyProps, 'as' | 'variant'>
