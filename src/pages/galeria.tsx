import client from 'graphql/client'
import GET_GALERIA from 'graphql/queries/getGaleria'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import GaleriaPage from 'templates/galeria'
import { GaleriasProps } from 'types/api'

export default function Perfil({ galerias }: GaleriasProps) {
  return (
    <>
      <Head>
        <title>Galeria · Arthur Nestrovski</title>
      </Head>
      <GaleriaPage galerias={galerias} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { galerias } = await client.request(GET_GALERIA)

  return {
    props: {
      galerias,
    },
  }
}
