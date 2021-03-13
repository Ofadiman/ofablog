import { GetAsValueOptions } from './Typography.types'

// @ts-expect-error
// eslint-disable-next-line consistent-return
export const getAsValue = ({ as, variant }: GetAsValueOptions): string | undefined => {
  if (as !== undefined) {
    return as
  }

  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
    return variant
  }
}
