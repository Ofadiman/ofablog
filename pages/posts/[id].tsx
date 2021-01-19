import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { Date } from '../../components/atoms/Date/Date'
import { getAllPostIds, getPostData, PostData } from '../../lib/posts'

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
  const { contentHtml, title, date } = postData

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Date dateString={date} />
        <Link href={'/'}>{'back to home'}</Link>
      </div>
    </>
  )
}
