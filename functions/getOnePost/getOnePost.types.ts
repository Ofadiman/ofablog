import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import { PostFrontMatterDto } from '../../dto/PostFrontMatter.dto'

export type GetOnePostArgs = {
  slug: string
}

export type GetOnePostResult = {
  frontMatter: PostFrontMatterDto
  slug: string
  source: MDXRemoteSerializeResult
}
