import fs from 'fs'

import { MDX_FILE_EXTENSION_REGEX } from '../../constants/RegularExpressions.constants'
import { GetManyResourceSlugsArgs } from './getManyResourceSlugs.types'

export const getManyResourceSlugs = async (args: GetManyResourceSlugsArgs): Promise<string[]> => {
  const { resourcePath } = args

  return fs
    .readdirSync(resourcePath)
    .filter((entityName) => MDX_FILE_EXTENSION_REGEX.test(entityName))
    .map((fileName) => fileName.replace(MDX_FILE_EXTENSION_REGEX, ''))
}
