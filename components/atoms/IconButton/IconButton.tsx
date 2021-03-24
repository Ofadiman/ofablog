import { useButton } from '@react-aria/button'
import React, { useRef, VFC } from 'react'

import { RippleEffect } from '../RippleEffect/RippleEffect'
import * as S from './IconButton.styles'
import { IconButtonProps } from './IconButton.types'

export const IconButton: VFC<IconButtonProps> = ({ className, onPress, children, size }) => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const { buttonProps } = useButton(
    {
      elementType: 'button',
      onPress
    },
    ref
  )

  return (
    <S.Wrapper className={className} size={size} {...buttonProps}>
      {children}
      <RippleEffect />
    </S.Wrapper>
  )
}
