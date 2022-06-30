import client from 'graphql/client'
import GET_ALL from 'graphql/queries/getAll'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import SearchPage from 'templates/search'
import { AllProps } from 'types/api'

export default function Busca({ everything }: { everything: AllProps }) {
  return (
    <>
      <Head>
        <title>Busca · Arthur Nestrovski</title>
      </Head>
      <SearchPage everything={everything} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const everything = await client.request<AllProps>(GET_ALL)

  return {
    props: {
      everything,
    },
  }
}
