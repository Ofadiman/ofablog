import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { MDX_COMPONENTS } from '../../constants/MdxComponents.constants'
import { getManyPostPaths } from '../../functions/getManyPostPaths/getManyPostPaths'
import { getOnePost } from '../../functions/getOnePost/getOnePost'
import { GetOnePostResult } from '../../functions/getOnePost/getOnePost.types'

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

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostPaths = await getManyPostPaths()

  return {
    fallback: false,
    paths: allPostPaths
  }
}

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> = async ({ params }) => {
  const props = await getOnePost({ slug: params!.slug })

  return { props }
}

export type PostPageProps = GetOnePostResult

export type PostPageParams = ParsedUrlQuery & {
  slug: string
}
