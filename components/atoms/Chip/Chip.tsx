import React, { VFC } from 'react'

import { RippleEffect } from '../RippleEffect/RippleEffect'
import * as S from './Chip.styles'
import { ChipProps } from './Chip.types'

export const Chip: VFC<ChipProps> = ({ className, children, isActive = false, onClick }) => {
  const isClickable = Boolean(onClick)

  return (
    <S.Chip className={className} isActive={isActive} isClickable={isClickable}>
      {children}
      <RippleEffect />
    </S.Chip>
  )
}
