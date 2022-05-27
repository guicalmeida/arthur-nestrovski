import client from 'graphql/client'
import GET_TEXTOS from 'graphql/queries/getTextos'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import TextosPage from 'templates/textos'
import { TextosProps } from 'types/api'

export default function Textos({ textos }: TextosProps) {
  return (
    <>
      <Head>
        <title>Textos · Arthur Nestrovski</title>
      </Head>
      <TextosPage textos={textos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { textos } = await client.request(GET_TEXTOS)

  return {
    props: {
      textos,
    },
  }
}
