import { setupPlop } from '@ofadiman/plop'
import { NodePlopAPI } from 'plop'

import { componentConfig } from './codegen/component/component.config'
import { componentConst } from './codegen/component/component.const'

export default function plopGenerator(plop: NodePlopAPI): void {
  plop.setGenerator(componentConst.generatorName, componentConfig)
  setupPlop(plop)
}
