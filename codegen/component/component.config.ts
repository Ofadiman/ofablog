import { composeValidators, PlopExitCodes, PlopGeneratorConfig, requireInput, requirePascalCase } from '@ofadiman/plop'
import chalk from 'chalk'
import { Answers } from 'inquirer'

import { componentActions } from './component.actions'
import { componentConst } from './component.const'

export const componentConfig: PlopGeneratorConfig = {
  actions: (answers) => {
    if (!answers || !answers[componentConst.variables.shouldGenerateCode]) {
      process.exit(PlopExitCodes.CancelCodegen)
    }

    return componentActions
  },
  description: 'Generate a/an component.',
  prompts: [
    {
      message: 'Choose a name for component:',
      name: componentConst.variables.name,
      type: 'input',
      validate: composeValidators(requireInput('Name is required!'), requirePascalCase('Name must be in pascal case!'))
    },
    {
      choices: ['atom', 'molecule', 'organism', 'template'],
      message: 'What type of component do you want to generate?',
      name: componentConst.variables.type,
      type: 'list'
    },
    {
      choices: [
        { name: 'Yes', value: true },
        { name: 'No', value: false }
      ],
      message: (answers: Answers): string => {
        return `Do you want to generate ${chalk.green(answers[componentConst.variables.name])} component?`
      },
      name: componentConst.variables.shouldGenerateCode,
      type: 'list'
    }
  ]
}
