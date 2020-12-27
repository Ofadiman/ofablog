import React from 'react'

import { TypographyProps } from './Typography.types'

export const Typography: FC<TypographyProps> = ({ className }) => {
  return <div className={className}>{'renders Typography'}</div>
}
