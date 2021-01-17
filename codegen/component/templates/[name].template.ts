import { componentConst } from '../component.const'

export const template = `import React from 'react'

import { Styled${componentConst.plop.name.pascalCase} } from './${componentConst.plop.name.pascalCase}.styles'
import { ${componentConst.plop.name.pascalCase}Props } from './${componentConst.plop.name.pascalCase}.types'

export const ${componentConst.plop.name.pascalCase}: FC<${componentConst.plop.name.pascalCase}Props> = ({ className }) => {
  return <Styled${componentConst.plop.name.pascalCase} className={className}>{'renders ${componentConst.plop.name.pascalCase}'}</Styled${componentConst.plop.name.pascalCase}>
}
`
