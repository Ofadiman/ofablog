import React, { VFC } from 'react'

import { StyledTypography } from './Typography.styles'
import { TypographyProps } from './Typography.types'

export const Typography: VFC<TypographyProps> = ({ className, variant, as, children }) => {
  return (
    <StyledTypography as={as} className={className} variant={variant}>
      {children}
    </StyledTypography>
  )
}
