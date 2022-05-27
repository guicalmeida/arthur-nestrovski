import client from 'graphql/client'
import GET_NOTICIAS from 'graphql/queries/getNoticias'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import NoticiasPage from 'templates/noticias'
import { NoticiasProps } from 'types/api'

export default function Noticias({ noticias }: NoticiasProps) {
  return (
    <>
      <Head>
        <title>Notícias · Arthur Nestrovski</title>
      </Head>
      <NoticiasPage noticias={noticias} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { noticias } = await client.request(GET_NOTICIAS)

  return {
    props: {
      noticias,
    },
  }
}
