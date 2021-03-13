import React, { VFC } from 'react'

import * as S from './Typography.styles'
import { TypographyProps } from './Typography.types'
import { getAsValue } from './Typography.utils'

export const Typography: VFC<TypographyProps> = ({ className, variant, as, children }) => {
  return (
    // @ts-expect-error
    <S.Typography as={getAsValue({ as, variant })} className={className} variant={variant}>
      {children}
    </S.Typography>
  )
}
