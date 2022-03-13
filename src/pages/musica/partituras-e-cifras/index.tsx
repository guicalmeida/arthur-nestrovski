import client from 'graphql/client'
import GET_MUSICSHEET from 'graphql/queries/getPartiturasECifras'
import type { GetStaticProps } from 'next'
import PartiturasECifrasPage from 'templates/PartiturasECifras'
import { partiturasECifrasProps } from 'types/api'

export default function DVDs({ partiturasECifras }: partiturasECifrasProps) {
  return <PartiturasECifrasPage partiturasECifras={partiturasECifras} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { partiturasECifras } = await client.request(GET_MUSICSHEET)

  return {
    props: {
      partiturasECifras,
    },
  }
}
