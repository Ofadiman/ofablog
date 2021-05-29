import { IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { Link } from '../Link/Link.component'
import { Logo } from '../Logo/Logo.component'
import { useStyles } from './Header.component.styles'
import { HeaderProps } from './Header.component.types'

export const Header = ({
  className,
  isMobile,
  onMenuClick,
  ThemeSwitcher,
  links
}: HeaderProps): ReactElement | null => {
  const classes = useStyles()

  if (isMobile) {
    return (
      <div className={clsx(classes.root, className)}>
        <header className={classes.header}>
          <Logo href={'/'} />
          <div>
            {ThemeSwitcher}
            <IconButton onClick={onMenuClick}>
              <Menu />
            </IconButton>
          </div>
        </header>
      </div>
    )
  }

  return (
    <div className={clsx(classes.root, className)}>
      <header className={classes.header}>
        <Logo href={'/'} />
        <nav>
          <ul className={classes.list}>
            {links.map(({ href, title }) => (
              <li className={classes.listItem} key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {ThemeSwitcher}
      </header>
    </div>
  )
}
