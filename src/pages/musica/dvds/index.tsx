import client from 'graphql/client'
import GET_DVDS from 'graphql/queries/getDvds'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import DVDsPage from 'templates/DVDs'
import { DVDsProps } from 'types/api'

export default function DVDs({ dvds }: DVDsProps) {
  return (
    <>
      <Head>
        <title>DVDs · Arthur Nestrovski</title>
      </Head>
      <DVDsPage dvds={dvds} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { dvds } = await client.request(GET_DVDS)

  return {
    props: {
      dvds,
    },
  }
}
