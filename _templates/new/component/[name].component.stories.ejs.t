---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.stories.tsx
---
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.component'
import { Props } from './<%= h.changeCase.pascal(name) %>.component.types'

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>'
} as Meta

const Template: Story<Props> = (args) => <<%= h.changeCase.pascal(name) %> {...args} />

export const Main = Template.bind({})
Main.args = {}
