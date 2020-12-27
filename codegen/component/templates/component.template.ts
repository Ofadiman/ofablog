import { componentConst } from '../component.const'

export const template = `
import React from 'react'

import { Styled${componentConst.plop.name} } from './${componentConst.plop.name}.styles'
import { ${componentConst.plop.name}Props } from './${componentConst.plop.name}.types'

export const ${componentConst.plop.name}: FC<${componentConst.plop.name}Props> = ({ className }) => {
  return <Styled${componentConst.plop.name} className={className}>{'renders ${componentConst.plop.name}'}</Styled${componentConst.plop.name}>
}
`
