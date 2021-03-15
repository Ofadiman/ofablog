import { componentConst } from '../component.const'

export const template = `import React, { VFC } from 'react'

import * as S from './${componentConst.plop.name.pascalCase}.styles'
import { ${componentConst.plop.name.pascalCase}Props } from './${componentConst.plop.name.pascalCase}.types'

export const ${componentConst.plop.name.pascalCase}: VFC<${componentConst.plop.name.pascalCase}Props> = ({ className }) => {
  return <S.${componentConst.plop.name.pascalCase} className={className}>{'renders ${componentConst.plop.name.pascalCase}'}</S.${componentConst.plop.name.pascalCase}>
}
`
