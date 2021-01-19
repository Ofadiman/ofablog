import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

import { POSTS_DIRECTORY } from '../const/directories.const'
import { MARKDOWN_FILE_REGEX } from '../const/regularExpressions.const'

type FrontmatterContent = {
  date: string
  title: string
}

type PostParamData = {
  params: {
    id: string
  }
}

export type PostData = FrontmatterContent & { contentHtml: string; id: string }

export const getSortedPostsData = (): PostData[] => {
  const fileNames = readdirSync(POSTS_DIRECTORY)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(MARKDOWN_FILE_REGEX, '')

    const fullPath = path.join(POSTS_DIRECTORY, fileName)
    const fileContents = readFileSync(fullPath, 'utf8')

    const postMetadata = matter(fileContents)

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
        id: fileName.replace(MARKDOWN_FILE_REGEX, '')
      }
    }
  })
}

export const getPostData = async (id: string): Promise<PostData> => {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    id,
    ...matterResult.data
  } as PostData
}
