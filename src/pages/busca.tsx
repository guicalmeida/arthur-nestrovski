import client from 'graphql/client'
import {
  GET_CDS_E_DVDS,
  GET_LETRAS_E_PARTITURAS,
  GET_LIVROS_E_NOTICIAS,
  GET_SHOWS_E_EVENTOS,
  GET_TEXTOS_E_VIDEOS,
} from 'graphql/queries/getSearch'
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
  const cdsEDvds = await client.request<Pick<AllProps, 'cDs' | 'dvds'>>(
    GET_CDS_E_DVDS
  )
  const letrasEPartituras = await client.request<
    Pick<AllProps, 'letras' | 'partiturasECifras'>
  >(GET_LETRAS_E_PARTITURAS)
  const showsEEventos = await client.request<Pick<AllProps, 'shows' | 'eventos'>>(
    GET_SHOWS_E_EVENTOS
  )
  const livrosENoticias = await client.request<
    Pick<AllProps, 'livros' | 'noticias'>
  >(GET_LIVROS_E_NOTICIAS)
  const textosEVideos = await client.request<Pick<AllProps, 'textos' | 'videos'>>(
    GET_TEXTOS_E_VIDEOS
  )

  const everything = {
    ...cdsEDvds,
    ...letrasEPartituras,
    ...showsEEventos,
    ...livrosENoticias,
    ...textosEVideos,
  } as AllProps

  return {
    props: {
      everything,
    },
  }
}
