import client from 'graphql/client'
import GET_CDS from 'graphql/queries/getCds'
import GET_DVDS from 'graphql/queries/getDvds'
import GET_LYRICS from 'graphql/queries/getLyrics'
import GET_COVERS from 'graphql/queries/getMusicCovers'
import GET_MUSICSHEET from 'graphql/queries/getPartiturasECifras'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import MusicPage from 'templates/Musica'
import MusicProps from 'types/groups'

export default function Musica({
  cDs,
  dvds,
  letras,
  partiturasECifras,
  letrasCover,
  partiturasCover,
}: MusicProps) {
  return (
    <>
      <Head>
        <title>Música · Arthur Nestrovski</title>
      </Head>
      <MusicPage
        cDs={cDs}
        dvds={dvds}
        letras={letras}
        partiturasECifras={partiturasECifras}
        letrasCover={letrasCover}
        partiturasCover={partiturasCover}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { cDs } = await client.request(GET_CDS)
  const { partiturasECifras } = await client.request(GET_MUSICSHEET)
  const { letras } = await client.request(GET_LYRICS)
  const { dvds } = await client.request(GET_DVDS)
  const { letrasCover, partiturasCover } = await client.request(GET_COVERS)

  return {
    props: {
      cDs,
      partiturasECifras,
      letras,
      dvds,
      letrasCover,
      partiturasCover,
    },
  }
}
