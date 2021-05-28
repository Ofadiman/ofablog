import { Meta, Story } from '@storybook/react'
import React from 'react'

import { CodeHighlighter } from './CodeHighlighter.component'
import { CODE_BLOCK } from './CodeHighlighter.component.stories.utils'
import { CodeHighlighterProps } from './CodeHighlighter.component.types'

export default {
  title: 'Components/CodeHighlighter'
} as Meta

const Template: Story<CodeHighlighterProps> = (args) => <CodeHighlighter {...args} />

export const Main = Template.bind({})
Main.args = {
  children: CODE_BLOCK,
  className: 'tsx'
}
