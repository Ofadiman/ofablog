import { IconButton } from '@material-ui/core'
import { Brightness5Outlined, NightsStayOutlined } from '@material-ui/icons'
import React, { ReactElement } from 'react'

import { ThemeSwitcherProps } from './ThemeSwitcher.component.types'

export const ThemeSwitcher = ({ isDarkModeOn, onMoonClick, onSunClick }: ThemeSwitcherProps): ReactElement | null => {
  if (isDarkModeOn) {
    return (
      <IconButton onClick={onSunClick}>
        <Brightness5Outlined data-testid={'Brightness5Outlined'} />
      </IconButton>
    )
  }

  return (
    <IconButton onClick={onMoonClick}>
      <NightsStayOutlined data-testid={'NightsStayOutlined'} />
    </IconButton>
  )
}
