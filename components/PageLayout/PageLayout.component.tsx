import { Paper } from '@material-ui/core'
import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { useStyles } from './PageLayout.component.styles'
import { PageLayoutProps } from './PageLayout.component.types'

export const PageLayout = ({ className, children, Footer, Header }: PageLayoutProps): ReactElement | null => {
  const classes = useStyles()

  return (
    <Paper className={clsx(classes.root, className)} square={true}>
      {Header}
      <main className={classes.main}>{children}</main>
      {Footer}
    </Paper>
  )
}
