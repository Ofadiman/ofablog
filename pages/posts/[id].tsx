import * as fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { MDX_COMPONENTS } from '../../constants/MdxComponents.constants'
import { MDX_FILE_EXTENSION_REGEX } from '../../constants/RegularExpressions.constants'
import { Frontmatter } from '../../types/Frontmatter.type'

type Props = { frontMatter: Frontmatter; source: MDXRemoteSerializeResult }

type Params = ParsedUrlQuery & {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilePath = path.join('content', 'posts')
  const allPostsPaths = fs.readdirSync(postFilePath)

  return {
    fallback: false,
    paths: allPostsPaths.map((name) => `/posts/${name.replace(MDX_FILE_EXTENSION_REGEX, '')}`)
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const postFilePath = path.join('content', 'posts', `${params!.id}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })

  return { props: { frontMatter: data as Frontmatter, source: mdxSource } }
}

export default function PostPage({ frontMatter, source }: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <main>
        <article>
          <p>{frontMatter.title}</p>
          <MDXRemote {...source} components={MDX_COMPONENTS} />
          <Link href={'/'}>{'back to home'}</Link>
        </article>
      </main>
    </>
  )
}
