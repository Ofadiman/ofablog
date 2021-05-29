import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { getManyPosts } from '../functions/getManyPosts/getManyPosts'
import { GetManyPostsResult } from '../functions/getManyPosts/getManyPosts.types'

export default function HomePage({ allPosts }: Props): ReactNode {
  return (
    <section>
      <ul>
        {allPosts.map(({ frontMatter, slug }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{frontMatter.title}</Link>
            <br />
            {frontMatter.createdAt}
          </li>
        ))}
      </ul>
    </section>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = await getManyPosts()

  return {
    props: {
      allPosts
    }
  }
}

type Props = { allPosts: GetManyPostsResult }
