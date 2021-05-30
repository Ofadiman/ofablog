import { ReactElement } from 'react'
import useDarkMode from 'use-dark-mode'

import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher.component'

export const ThemeSwitcherContainer = (): ReactElement | null => {
  const { value: isDarkModeActive, toggle } = useDarkMode()

  return <ThemeSwitcher isDarkModeOn={isDarkModeActive} onMoonClick={toggle} onSunClick={toggle} />
}
