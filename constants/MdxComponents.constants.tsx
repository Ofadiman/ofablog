import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { CodeHighlighter } from '../components/CodeHighlighter/CodeHighlighter.component'

const PreRenderer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): JSX.Element => (
  <div {...props} />
)

export const MDX_COMPONENTS = {
  code: CodeHighlighter,
  pre: PreRenderer
}
