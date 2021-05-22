import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { useStyles } from './PostCard.component.styles'
import { Props } from './PostCard.component.types'

export const PostCard = ({ className }: Props): ReactElement | null => {
  const classes = useStyles()

  return <div className={clsx(classes.root, className)}>{'renders PostCard'}</div>
}
