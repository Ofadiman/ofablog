import { componentConst } from '../component.const'

export const template = `
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ${componentConst.plop.name} } from './${componentConst.plop.name}'
import { ${componentConst.plop.name}Props } from './${componentConst.plop.name}.types'

export default {
  title: 'Components/${componentConst.plop.pascalCaseType}/${componentConst.plop.name}'
} as Meta

const Template: Story<${componentConst.plop.name}Props> = (args) => <${componentConst.plop.name} {...args} />

export const Main = Template.bind({})
Main.args = {}

`
