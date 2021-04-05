import { setupPlop } from '@ofadiman/plop-utils'
import { NodePlopAPI } from 'plop'

export default function plopGenerator(plop: NodePlopAPI): void {
  setupPlop(plop, {
    reactComponentTypescriptAtomicDesignStyledComponents: {
      componentsDirectory: 'components'
    }
  })
}
