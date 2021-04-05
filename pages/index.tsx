import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { getSortedPostsData } from '../lib/posts'
import { PostData } from '../lib/types/PostData.type'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default function HomePage({ allPostsData }: { allPostsData: PostData[] }): ReactNode {
  return (
    <section>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
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
