import { componentConst } from '../component.const'

export const template = `import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ${componentConst.plop.name.pascalCase} } from './${componentConst.plop.name.pascalCase}'
import { ${componentConst.plop.name.pascalCase}Props } from './${componentConst.plop.name.pascalCase}.types'

export default {
  title: 'Components/${componentConst.plop.type.pascalCase}/${componentConst.plop.name.pascalCase}'
} as Meta

const Template: Story<${componentConst.plop.name.pascalCase}Props> = (args) => <${componentConst.plop.name.pascalCase} {...args} />

export const Main = Template.bind({})
Main.args = {}
`
