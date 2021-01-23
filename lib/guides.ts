import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { GUIDES_DIRECTORY } from './const/directories'
import { MDX_FILE_EXTENSION_REGEX } from './const/regularExpressions'
import { transformMdx } from './functions/transformMdx/transformMdx'
import { GuideData } from './types/GuideData.type'
import { GuideFrontmatter } from './types/GuideFrontmatter.type'
import { GuideStaticPath } from './types/GuideStaticPath.type'

export const getAllGuidesStaticPaths = (): GuideStaticPath[] => {
  const guideDirectoriesAbsolutePaths = readdirSync(GUIDES_DIRECTORY)
  const guideDirectoriesNames = guideDirectoriesAbsolutePaths.map((path) => path.split('/').pop())

  return guideDirectoriesNames.flatMap((directory) => {
    const guidePath = `${GUIDES_DIRECTORY}/${directory as string}`
    const guideFiles = readdirSync(guidePath)

    return guideFiles.map((fileName) => ({
      params: {
        guide: directory as string,
        id: fileName.replace(MDX_FILE_EXTENSION_REGEX, '')
      }
    }))
  })
}

export const getGuideData = async (guide: string, id: string): Promise<GuideData> => {
  const guidePath = path.join(GUIDES_DIRECTORY, guide, `${id}.mdx`)
  const guideContent = readFileSync(guidePath, 'utf8')

  const { data, content } = matter(guideContent)

  const transformedMdx = (await transformMdx(content, data as GuideFrontmatter)) as string

  return {
    guide,
    id,
    ...data,
    transformedMdx
  } as GuideData
}
