import { componentConst } from '../component.const'

export const template = `
import styled, { css } from 'styled-components'

export const Styled${componentConst.plop.name} = styled.div\`
  $\{({ theme }) => css\`\`}
\`
`
