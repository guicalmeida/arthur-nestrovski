import client from 'graphql/client'
import GET_TEXTOS from 'graphql/queries/getTextos'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { formatIsoString } from 'services/datesHelper'
import universalSlugify from 'services/slugifyHelper'
import Texto from 'templates/textos/texto'
import { TextoProps, TextoUnitProps } from 'types/api'

export default function TextoUnit({ texto }: TextoUnitProps) {
  return (
    <>
      <Head>
        <title>{texto.titulo} · Arthur Nestrovski</title>
      </Head>
      <Texto texto={texto} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { textos } = await client.request(GET_TEXTOS)

  const paths = textos.map((texto: TextoProps) => {
    const slug = universalSlugify(
      texto?.titulo + '-' + formatIsoString(texto?.createdAt)
    )
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { textos } = await client.request(GET_TEXTOS)
  const texto = textos.find((texto: TextoProps) => {
    const textoSlug = universalSlugify(
      texto?.titulo + '-' + formatIsoString(texto?.createdAt)
    )
    return params?.slug === textoSlug
  })
  return {
    props: {
      texto,
    },
  }
}
