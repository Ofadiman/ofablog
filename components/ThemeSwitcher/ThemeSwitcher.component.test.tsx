import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderComponent } from '../../functions/renderComponent/renderComponent'
import { ThemeSwitcher } from './ThemeSwitcher.component'
import { t } from './ThemeSwitcher.component.test.utils'

describe('ThemeSwitcher component', () => {
  afterEach(() => {
    t.handleMoonClickMock.mockReset()
    t.handleSunClickMock.mockReset()
  })

  describe('dark mode is on', () => {
    test('should render sun icon and call `onSunClick` callback', () => {
      renderComponent(
        <ThemeSwitcher isDarkModeOn={true} onMoonClick={t.handleMoonClickMock} onSunClick={t.handleSunClickMock} />
      )

      const sunIcon = screen.getByTestId(t.sunIconTestId)

      userEvent.click(sunIcon)
      expect(t.handleSunClickMock).toHaveBeenCalledTimes(1)
    })
  })

  describe('dark mode is off', () => {
    test('should render moon icon and call `onMoonClick` callback', () => {
      renderComponent(
        <ThemeSwitcher isDarkModeOn={false} onMoonClick={t.handleMoonClickMock} onSunClick={t.handleSunClickMock} />
      )

      const moonIcon = screen.getByTestId(t.moonIconTestId)

      userEvent.click(moonIcon)
      expect(t.handleMoonClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
