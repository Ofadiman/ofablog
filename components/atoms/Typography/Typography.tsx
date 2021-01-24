import React, { VFC } from 'react'

import { StyledTypography } from './Typography.styles'
import { TypographyProps } from './Typography.types'

export const Typography: VFC<TypographyProps> = ({ className, children }) => {
  return <StyledTypography className={className}>{children}</StyledTypography>
}
