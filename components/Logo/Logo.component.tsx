import clsx from 'clsx'
import Image from 'next/image'
import React, { ReactElement } from 'react'

import { Link } from '../Link/Link.component'
import { useStyles } from './Logo.component.styles'
import { LogoProps } from './Logo.component.types'

export const Logo = ({ className, href }: LogoProps): ReactElement | null => {
  const classes = useStyles()

  return (
    <Link className={clsx(classes.root, className)} href={href}>
      <Image alt={'Application logo'} height={24} src={'/icons/logo.svg'} width={24} />
    </Link>
  )
}
