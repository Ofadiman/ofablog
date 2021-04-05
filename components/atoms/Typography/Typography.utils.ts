import { GetAsValueOptions } from './Typography.types'

export const getAsValue = ({ as, variant }: GetAsValueOptions): string => {
  if (as !== undefined) {
    return as
  }

  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
    return variant
  }

  return 'p'
}
