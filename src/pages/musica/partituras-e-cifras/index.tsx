import client from 'graphql/client'
import GET_MUSICSHEET from 'graphql/queries/getPartiturasECifras'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import PartiturasECifrasPage from 'templates/PartiturasECifras'
import { partiturasECifrasProps } from 'types/api'

export default function PartiturasECifras({
  partiturasECifras,
}: partiturasECifrasProps) {
  return (
    <>
      <Head>
        <title>Partituras e cifras · Arthur Nestrovski</title>
      </Head>
      <PartiturasECifrasPage partiturasECifras={partiturasECifras} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { partiturasECifras } = await client.request(GET_MUSICSHEET)

  return {
    props: {
      partiturasECifras,
    },
  }
}
