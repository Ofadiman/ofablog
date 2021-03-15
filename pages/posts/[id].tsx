import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { Typography } from '../../components/atoms/Typography/Typography'
import { MDX_COMPONENTS } from '../../lib/const/mdxComponents'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { PostData } from '../../lib/types/PostData.type'

type GetStaticPropsProps = {
  postData: PostData
}

type GetStaticPropsParams = ParsedUrlQuery & {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps<GetStaticPropsProps, GetStaticPropsParams> = async ({ params }) => {
  if (!params) {
    throw new Error('"params" is undefined!')
  }

  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export default function PostPage(props: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  const { postData } = props
  const { transformedMdx, title } = postData
  const content = hydrate(transformedMdx, { components: MDX_COMPONENTS })

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <article>
          <Typography as={'h2'} variant={'h4'}>
            {title}
          </Typography>
          {content}
          <Link href={'/'}>{'back to home'}</Link>
        </article>
      </main>
    </>
  )
}
