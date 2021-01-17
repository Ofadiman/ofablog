import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { POSTS_DIRECTORY } from '../const/directories.const'
import { MARKDOWN_FILE_REGEX } from '../const/regularExpressions.const'

type FrontmatterContent = {
  date: string
  title: string
}

export type PostData = FrontmatterContent & { id: string }

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
