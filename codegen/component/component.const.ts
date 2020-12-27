import { createPlopVar } from '@ofadiman/plop'

const variables = {
  name: 'name',
  shouldGenerateCode: 'shouldGenerateCode',
  type: 'type'
}

const plop = {
  name: createPlopVar(variables.name),
  type: `${createPlopVar(variables.type)}s`
}

export const componentConst = {
  generator: 'Component',
  plop,
  variables
}
