import { ButtonAria, useButton } from '@react-aria/button'
import React, { HTMLAttributes, useRef, VFC } from 'react'

import { RippleEffect } from '../RippleEffect/RippleEffect'
import * as S from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: VFC<ButtonProps> = (props) => {
  const { className, children, leftIcon: LeftIcon, rightIcon: RightIcon } = props
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const { buttonProps } = useButton(props, buttonRef) as ButtonAria<HTMLAttributes<HTMLButtonElement>>

  return (
    <S.Button ref={buttonRef} {...buttonProps} className={className}>
      {LeftIcon && <S.IconWrapper>{LeftIcon}</S.IconWrapper>}
      <S.TextWrapper>{children}</S.TextWrapper>
      {RightIcon && <S.IconWrapper>{RightIcon}</S.IconWrapper>}
      <RippleEffect />
    </S.Button>
  )
}
