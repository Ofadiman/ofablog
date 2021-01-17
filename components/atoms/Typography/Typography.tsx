import React, { FC } from 'react'

import { StyledTypography } from './Typography.styles'
import { TypographyProps } from './Typography.types'

export const Typography: FC<TypographyProps> = ({ className }) => {
  return <StyledTypography className={className}>{'renders Typography'}</StyledTypography>
}
