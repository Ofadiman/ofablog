import { Button } from '@material-ui/core'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { Frontmatter } from '../types/Frontmatter.type'

type Props = { allPosts: (Frontmatter & { id: string; transformedMdx: string })[] }

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      allPosts: []
    }
  }
}

export default function HomePage({ allPosts }: Props): ReactNode {
  return (
    <section>
      <Button>{'button'}</Button>
      <ul>
        {allPosts.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
  )
}
