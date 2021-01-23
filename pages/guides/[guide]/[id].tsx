import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { MDX_COMPONENTS } from '../../../lib/const/mdxComponents'
import { getAllGuidesStaticPaths, getGuideData } from '../../../lib/guides'
import { GuideData } from '../../../lib/types/GuideData.type'

type Props = {
  guideData: GuideData
}

type Params = ParsedUrlQuery & {
  guide: string
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllGuidesStaticPaths()

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { guide, id } = params!
  const guideData = await getGuideData(guide, id)

  return {
    props: {
      guideData
    }
  }
}

export default function GuidePage(props: InferGetStaticPropsType<typeof getStaticProps>): ReactNode {
  const { guideData } = props
  const { transformedMdx, title } = guideData
  const content = hydrate(transformedMdx, { components: MDX_COMPONENTS })

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <p>{'guide props'}</p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
        <div>{content}</div>
        <Link href={'/'}>{'back to home'}</Link>
      </div>
    </>
  )
}
