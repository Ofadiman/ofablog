import { HeaderLink } from '../../types/HeaderLink.type'

export type HeaderProps = {
  ThemeSwitcher: JSX.Element
  className?: string
  isMobile: boolean
  links: HeaderLink[]
  onMenuClick: VoidFunction
}
