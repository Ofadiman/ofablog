import { composeValidators, PlopGeneratorConfig } from '@ofadiman/plop'

import { readDirs } from '../readDirs'
import { componentActions } from './component.actions'
import { componentConst } from './component.const'

export const componentConfig: PlopGeneratorConfig = {
  actions: componentActions,
  description: 'Generate a component.',
  prompts: [
    {
      message: 'Component name:',
      name: componentConst.variables.name,
      type: 'input',
      validate: composeValidators()
    },
    {
      choices: readDirs('components'),
      message: 'What type of component do you want to generate?',
      name: componentConst.variables.type,
      type: 'list'
    }
  ]
}
