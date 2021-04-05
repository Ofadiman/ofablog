import { useSpring } from '@react-spring/core'
import React, { VFC } from 'react'

import * as S from './SideDrawer.component.styles'
import { SideDrawerProps } from './SideDrawer.component.types'

export const SideDrawer: VFC<SideDrawerProps> = ({ className, children, isOpen }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)'
  })

  return (
    <S.SideDrawer className={className} style={animation}>
      {children}
    </S.SideDrawer>
  )
}
