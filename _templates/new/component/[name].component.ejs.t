---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.tsx
---
import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { useStyles } from './<%= h.changeCase.pascal(name) %>.component.styles'
import { Props } from './<%= h.changeCase.pascal(name) %>.component.types'

export const <%= h.changeCase.pascal(name) %> = ({ className }: Props): ReactElement | null => {
  const classes = useStyles()

  return <div className={clsx(classes.root, className)}>{'renders <%= h.changeCase.pascal(name) %>'}</div>
}
