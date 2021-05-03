---
to: components/<%= h.inflection.pluralize(h.changeCase.lower(type)) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.stories.tsx
---
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.component'
import { Props } from './<%= h.changeCase.pascal(name) %>.component.types'

export default {
  title: 'Components/<% h.inflection.pluralize(h.inflection.camelize(type)) %>/Button'
} as Meta

const Template: Story<Props> = (args) => <<%= h.changeCase.pascal(name) %> {...args} />

export const Main = Template.bind({})
Main.args = {}
