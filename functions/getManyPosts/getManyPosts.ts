import { getManyPostSlugs } from '../getManyPostSlugs/getManyPostSlugs'
import { getOnePost } from '../getOnePost/getOnePost'
import { GetManyPostsResult } from './getManyPosts.types'

export const getManyPosts = async (): Promise<GetManyPostsResult> => {
  const allPostSlugs = await getManyPostSlugs()

  const promises = allPostSlugs.map(async (slug) => getOnePost({ slug }))

  return Promise.all(promises)
}
