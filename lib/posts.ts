import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { POSTS_DIRECTORY } from './const/directories'
import { MDX_FILE_EXTENSION_REGEX } from './const/regularExpressions'
import { transformMdx } from './functions/transformMdx/transformMdx'
import { Frontmatter } from './types/Frontmatter.type'
import { PostData } from './types/PostData.type'
import { PostParamData } from './types/PostParamData.type'

export const getSortedPostsData = (): PostData[] => {
  const fileNames = readdirSync(POSTS_DIRECTORY)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(MDX_FILE_EXTENSION_REGEX, '')

    const fullPath = path.join(POSTS_DIRECTORY, fileName)
    const fileContent = readFileSync(fullPath, 'utf8')

    const postMetadata = matter(fileContent)

    return {
      id,
      ...postMetadata.data
    } as PostData
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }

    return -1
  })
}

export const getAllPostIds = (): PostParamData[] => {
  const fileNames = readdirSync(POSTS_DIRECTORY)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(MDX_FILE_EXTENSION_REGEX, '')
      }
    }
  })
}

export const getPostData = async (id: string): Promise<PostData> => {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.mdx`)
  const fileContents = readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const transformedMdx = (await transformMdx(content, data as Frontmatter)) as string

  return {
    id,
    ...data,
    transformedMdx
  } as PostData
}
