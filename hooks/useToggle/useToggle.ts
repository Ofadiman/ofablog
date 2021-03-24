import { useState } from 'react'

import { UseToggleReturn } from './useToggle.types'

export const useToggle = (isInitiallyToggled: boolean = false): UseToggleReturn => {
  const [isToggled, setIsToggled] = useState(isInitiallyToggled)

  const toggle = (): void => {
    setIsToggled((prevIsToggled) => !prevIsToggled)
  }

  return [isToggled, toggle]
}
