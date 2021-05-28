export const CODE_BLOCK = `import React, { ReactElement } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useStyles } from './CodeHighlighter.component.styles'
import { CodeHighlighterProps } from './CodeHighlighter.component.types'

SyntaxHighlighter.registerLanguage('typescript', typescript)

export const CodeHighlighter = ({ children, language }: CodeHighlighterProps): ReactElement | null => {
  const classes = useStyles()

  return (
    <SyntaxHighlighter
      className={classes.root}
      language={language}
      showInlineLineNumbers={true}
      showLineNumbers={true}
      style={atomOneDark}
    >
      {children}
    </SyntaxHighlighter>
  )
}
`
