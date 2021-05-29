import { GlobalStyles as MuiGlobalStyles } from '@material-ui/core'
import React from 'react'

export const GlobalStyles = (): JSX.Element => {
  return (
    <MuiGlobalStyles
      styles={{
        '*': { margin: 0, padding: 0 },
        html: {
          WebkitFontSmoothing: 'auto'
        }
      }}
    />
  )
}
