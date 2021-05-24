import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import * as fs from 'fs'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

import { DEFAULT_FILE_ENCODING } from '../../constants/FileEncodings.constants'
import { GetOneResourceArgs } from './getOneResource.types'

export const getOneResource = async <ResourceFrontMatter>(
  args: GetOneResourceArgs
): Promise<{ frontMatter: ResourceFrontMatter; slug: string; source: MDXRemoteSerializeResult }> => {
  const { fileName, resourcePath, dto } = args

  const filePath = path.join(resourcePath, `${fileName}.mdx`)
  const fileContent = fs.readFileSync(filePath, DEFAULT_FILE_ENCODING)

  const { data, content } = matter(fileContent)
  await validateOrReject(plainToClass(dto, data))
  const source = await serialize(content, { scope: data })

  return { frontMatter: data as ResourceFrontMatter, slug: fileName, source }
}
