import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react'

import { Home } from '../components/templates/Home/Home'
import { getSortedPostsData, PostData } from '../lib/posts'

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
    <>
      <Head>
        <title>{'Ofablog'}</title>
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <Home Footer={() => <footer>{'footer'}</footer>} Header={() => <header>{'header'}</header>}>
        <section>
          <h2>{'Blog'}</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Home>
    </>
  )
}
