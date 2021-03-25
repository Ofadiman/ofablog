/* eslint-disable react/jsx-no-useless-fragment,@typescript-eslint/naming-convention */
import React, { VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import { RenderControllerProps } from './RenderController.types'

export const RenderController: VFC<RenderControllerProps> = ({ children, renderOn }) => {
  const { desktop, tablet, all, mobile } = { all: false, desktop: false, mobile: false, tablet: false, ...renderOn }
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ maxWidth: 1023, minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  if (isMobile && (all || mobile)) {
    return <>{children}</>
  }

  if (isTablet && (all || tablet)) {
    return <>{children}</>
  }

  if (isDesktop && (all || desktop)) {
    return <>{children}</>
  }

  return null
}
