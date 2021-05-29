import { useDarkMode } from 'next-dark-mode'
import { ReactElement } from 'react'

import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher.component'

export const ThemeSwitcherContainer = (): ReactElement | null => {
  const { darkModeActive: isDarkModeOn, switchToLightMode, switchToDarkMode } = useDarkMode()

  return <ThemeSwitcher isDarkModeOn={isDarkModeOn} onMoonClick={switchToDarkMode} onSunClick={switchToLightMode} />
}
