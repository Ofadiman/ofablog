import { DefaultTheme } from 'styled-components'

export const mediaQueries: DefaultTheme['mediaQueries'] = {
  down: {
    desktop: '@media(max-width: 1200px)',
    tablet: '@media(max-width: 768px)'
  },
  up: {
    desktop: '@media(min-width: 1200px)',
    tablet: '@media(min-width: 768px)'
  }
}
