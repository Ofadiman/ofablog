import { createPlopVariables } from '@ofadiman/plop'

const variables = {
  name: 'name',
  type: 'type'
} as const

const plop = createPlopVariables(variables)

export const componentConst = {
  generatorName: 'component',
  plop,
  variables
}
