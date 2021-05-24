import { Button } from '@material-ui/core'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { getManyPosts } from '../functions/getManyPosts/getManyPosts'
import { GetManyPostsResult } from '../functions/getManyPosts/getManyPosts.types'

type Props = { allPosts: GetManyPostsResult }

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = await getManyPosts()

  return {
    props: {
      allPosts
    }
  }
}

export default function HomePage({ allPosts }: Props): ReactNode {
  return (
    <section>
      <Button>{'button'}</Button>
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
