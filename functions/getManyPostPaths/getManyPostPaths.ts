import { POSTS_DIRECTORY } from '../../constants/ContentDirectories.constants'
import { PathPrefixes } from '../../enums/PathPrefixes.enum'
import { getManyResourcePaths } from '../getManyResourcePaths/getManyResourcePaths'

export const getManyPostPaths = async (): Promise<string[]> => {
  return getManyResourcePaths({ prefix: PathPrefixes.Posts, resourcePath: POSTS_DIRECTORY })
}
