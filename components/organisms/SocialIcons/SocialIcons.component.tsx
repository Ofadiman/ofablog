import React, { VFC } from 'react'

import { Link } from '../../atoms/Link/Link'
import * as S from './SocialIcons.component.styles'
import { SocialIconsProps } from './SocialIcons.component.types'

export const SocialIcons: VFC<SocialIconsProps> = ({ className, icons }) => {
  return (
    <S.SocialIcons className={className}>
      {icons.map(({ icon: Icon, to }) => (
        <Link href={to} key={to}>
          <Icon />
        </Link>
      ))}
    </S.SocialIcons>
  )
}
