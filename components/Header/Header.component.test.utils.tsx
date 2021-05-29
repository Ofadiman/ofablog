import { HeaderLink } from '../../types/HeaderLink.type'

const handleMenuClickMock = jest.fn().mockName('handleMenuClickMock')

const themeSwitcherTestId = 'themeSwitcherTestId'
const ThemeSwitcherMock = <div data-testid={themeSwitcherTestId}>{'ThemeSwitcherMock'}</div>

const headerLinks: HeaderLink[] = [
  { href: '/home', title: 'home' },
  { href: '/about', title: 'about' },
  { href: '/posts', title: 'posts' }
]

export const t = { ThemeSwitcherMock, handleMenuClickMock, headerLinks, themeSwitcherTestId }
