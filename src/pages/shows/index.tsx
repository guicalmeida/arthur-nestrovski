import client from 'graphql/client'
import GET_SHOWS from 'graphql/queries/getShows'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import ShowsPage from 'templates/Shows'
import { ShowsProps } from 'types/api'

export default function Perfil({ shows }: ShowsProps) {
  return (
    <>
      <Head>
        <title>Shows · Arthur Nestrovski</title>
      </Head>
      <ShowsPage shows={shows} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { shows } = await client.request(GET_SHOWS)

  return {
    props: {
      shows,
    },
  }
}
