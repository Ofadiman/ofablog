import React, { VFC } from 'react'

import { ICONS } from '../../../constants/icons'
import { NAV_LINKS } from '../../../constants/navLinks'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { RenderController } from '../../atoms/RenderController/RenderController'
import { RippleEffect } from '../../atoms/RippleEffect/RippleEffect'
import * as S from './Header.styles'
import { HeaderProps } from './Header.types'

export const Header: VFC<HeaderProps> = ({ className }) => {
  return (
    <S.Headroom className={className}>
      <S.Header>
        <S.Home>
          <ICONS.Logo />
          <RippleEffect />
        </S.Home>
        <RenderController renderOn={{ desktop: true }}>
          <nav>
            <ul>
              {NAV_LINKS.map(({ href, title }) => (
                <S.NavLink href={href} key={href}>
                  {title}
                </S.NavLink>
              ))}
            </ul>
          </nav>
        </RenderController>
        <S.IconsWrapper>
          <RenderController renderOn={{ all: true }}>
            <IconButton onPress={() => null} size={'large'}>
              <ICONS.DarkMode />
            </IconButton>
          </RenderController>
          <RenderController renderOn={{ mobile: true, tablet: true }}>
            <IconButton onPress={() => null} size={'large'}>
              <ICONS.Menu />
            </IconButton>
          </RenderController>
        </S.IconsWrapper>
      </S.Header>
    </S.Headroom>
  )
}
