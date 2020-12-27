import { ActionType } from 'plop'

import { componentConst } from './component.const'

export const componentActions: ActionType[] = [
  {
    path: `components/${componentConst.plop.type}/${componentConst.plop.name}/${componentConst.plop.name}.tsx`,
    template: require('./templates/component.template').template,
    type: 'add'
  },
  {
    path: `components/${componentConst.plop.type}/${componentConst.plop.name}/${componentConst.plop.name}.types.ts`,
    template: require('./templates/component.types.template').template,
    type: 'add'
  },
  {
    path: `components/${componentConst.plop.type}/${componentConst.plop.name}/${componentConst.plop.name}.styles.scss`,
    template: require('./templates/component.styles.template').template,
    type: 'add'
  },
  {
    path: `components/${componentConst.plop.type}/${componentConst.plop.name}/${componentConst.plop.name}.stories.tsx`,
    template: require('./templates/component.stories.template').template,
    type: 'add'
  }
]
