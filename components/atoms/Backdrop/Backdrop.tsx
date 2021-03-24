import React, { VFC } from 'react'

import * as S from './Backdrop.styles'
import { BackdropProps } from './Backdrop.types'

export const Backdrop: VFC<BackdropProps> = ({ className, onClick, isVisible }) => {
  return isVisible ? <S.Backdrop className={className} onClick={onClick} /> : null
}
