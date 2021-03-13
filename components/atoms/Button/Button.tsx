import React, { VFC } from 'react'

import { RippleEffect } from '../RippleEffect/RippleEffect'
import { StyledButton, StyledIconWrapper, StyledTextWrapper } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: VFC<ButtonProps> = ({
  className,
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick
}) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {LeftIcon && <StyledIconWrapper>{LeftIcon}</StyledIconWrapper>}
      <StyledTextWrapper>{children}</StyledTextWrapper>
      {RightIcon && <StyledIconWrapper>{RightIcon}</StyledIconWrapper>}
      <RippleEffect />
    </StyledButton>
  )
}
