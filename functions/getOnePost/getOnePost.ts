import { POSTS_DIRECTORY } from '../../constants/ContentDirectories.constants'
import { PostFrontMatterDto } from '../../dto/PostFrontMatter.dto'
import { getOneResource } from '../getOneResource/getOneResource'
import { GetOnePostArgs, GetOnePostResult } from './getOnePost.types'

export const getOnePost = async (args: GetOnePostArgs): Promise<GetOnePostResult> => {
  const { slug } = args

  return getOneResource<PostFrontMatterDto>({
    dto: PostFrontMatterDto,
    fileName: slug,
    resourcePath: POSTS_DIRECTORY
  })
}
