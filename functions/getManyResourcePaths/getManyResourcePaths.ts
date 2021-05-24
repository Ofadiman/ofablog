import { getManyResourceSlugs } from '../getManyResourceSlugs/getManyResourceSlugs'
import { GetManyResourcePathsArgs } from './getManyResourcePaths.types'

export const getManyResourcePaths = async (args: GetManyResourcePathsArgs): Promise<string[]> => {
  const { prefix, resourcePath } = args
  const slugs = await getManyResourceSlugs({ resourcePath })

  return slugs.map((slug) => `/${prefix}/${slug}`)
}
