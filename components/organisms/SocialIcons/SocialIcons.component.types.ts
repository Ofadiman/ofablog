import { IconType } from 'react-icons'

export type SocialIcon = { icon: IconType; to: string }

export type SocialIconsProps = {
  className?: string
  icons: SocialIcon[]
}
