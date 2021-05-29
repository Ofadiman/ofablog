import { ReactElement } from 'react'
import { isMobile } from 'react-device-detect'

import { Header } from '../../components/Header/Header.component'
import { HEADER_LINKS } from '../../constants/HeaderLinks.constants'
import { ThemeSwitcherContainer } from '../ThemeSwitcher/ThemeSwitcher.container'

export const HeaderContainer = (): ReactElement | null => {
  return (
    <Header
      ThemeSwitcher={<ThemeSwitcherContainer />}
      isMobile={isMobile}
      links={HEADER_LINKS}
      onMenuClick={() => null}
    />
  )
}
