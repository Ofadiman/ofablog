/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactElement } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { mapClassNameToLanguageString } from '../../functions/mapClassNameToLanguageString/mapClassNameToLanguageString'
import { useStyles } from './CodeHighlighter.component.styles'
import { CodeHighlighterProps } from './CodeHighlighter.component.types'

export const CodeHighlighter = ({ className, children }: CodeHighlighterProps): ReactElement | null => {
  const classes = useStyles()

  return (
    <SyntaxHighlighter
      className={classes.root}
      language={mapClassNameToLanguageString(className)}
      showInlineLineNumbers={true}
      showLineNumbers={true}
      style={atomOneDark}
    >
      {children.trim()}
    </SyntaxHighlighter>
  )
}
