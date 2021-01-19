import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

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
  const {
    postData: { contentHtml }
  } = props

  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}
