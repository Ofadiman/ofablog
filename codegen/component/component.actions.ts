import { ActionType } from 'plop'

import { componentConst } from './component.const'

export const componentActions: ActionType[] = [
  {
    path: `components/${componentConst.plop.type.unmodified}/${componentConst.plop.name.pascalCase}/${componentConst.plop.name.pascalCase}.tsx`,
    template: require('./templates/[name].template').template,
    type: 'add'
  },
  {
    path: `components/${componentConst.plop.type.unmodified}/${componentConst.plop.name.pascalCase}/${componentConst.plop.name.pascalCase}.types.ts`,
    template: require('./templates/[name].types.template').template,
    type: 'add'
  },
  {
    path: `components/${componentConst.plop.type.unmodified}/${componentConst.plop.name.pascalCase}/${componentConst.plop.name.pascalCase}.styles.ts`,
    template: require('./templates/[name].styles.template').template,
    type: 'add'
  },
  {
    path: `components/${componentConst.plop.type.unmodified}/${componentConst.plop.name.pascalCase}/${componentConst.plop.name.pascalCase}.stories.tsx`,
    template: require('./templates/[name].stories.template').template,
    type: 'add'
  }
]
