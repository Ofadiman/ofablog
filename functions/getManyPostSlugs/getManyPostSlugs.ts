import { POSTS_DIRECTORY } from '../../constants/ContentDirectories.constants'
import { getManyResourceSlugs } from '../getManyResourceSlugs/getManyResourceSlugs'

export const getManyPostSlugs = async (): Promise<string[]> => {
  return getManyResourceSlugs({ resourcePath: POSTS_DIRECTORY })
}
