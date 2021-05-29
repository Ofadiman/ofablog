import { screen } from '@testing-library/react'

import { renderComponent } from '../../functions/renderComponent/renderComponent'
import { Header } from './Header.component'
import { t } from './Header.component.test.utils'

describe('Header component', () => {
  describe('mobile device', () => {
    test('should render theme switcher, logo and menu button', () => {
      renderComponent(
        <Header
          ThemeSwitcher={t.ThemeSwitcherMock}
          isMobile={true}
          links={t.headerLinks}
          onMenuClick={t.handleMenuClickMock}
        />
      )

      const themeSwitcher = screen.getByTestId(t.themeSwitcherTestId)
      const logo = screen.getByAltText('Application logo')

      expect(logo).toBeInTheDocument()
      expect(themeSwitcher).toBeInTheDocument()
    })
  })

  describe('desktop device', () => {
    test('should render theme switcher, logo and header links', () => {
      renderComponent(
        <Header
          ThemeSwitcher={t.ThemeSwitcherMock}
          isMobile={false}
          links={t.headerLinks}
          onMenuClick={t.handleMenuClickMock}
        />
      )

      const links = screen.getAllByRole('link')
      const themeSwitcher = screen.getByTestId(t.themeSwitcherTestId)
      const logo = screen.getByRole('img')

      const linksCountWithLogoLink = t.headerLinks.length + 1
      expect(links).toHaveLength(linksCountWithLogoLink)
      expect(logo).toBeInTheDocument()
      expect(themeSwitcher).toBeInTheDocument()
    })
  })
})
