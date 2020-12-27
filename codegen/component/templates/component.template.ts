import { componentConst } from '../component.const'

export const template = `
import React from 'react'

import { ${componentConst.plop.name}Props } from './${componentConst.plop.name}.types'

export const ${componentConst.plop.name}: FC<${componentConst.plop.name}Props> = ({ className }) => {
  return <div className={className}>{'renders ${componentConst.plop.name}'}</div>
}
`
