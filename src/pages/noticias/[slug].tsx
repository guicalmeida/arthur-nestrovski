import client from 'graphql/client'
import GET_NOTICIAS from 'graphql/queries/getNoticias'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import universalSlugify from 'services/slugifyHelper'
import Noticia from 'templates/noticias/noticia'
import { NoticiaProps, NoticiaUnitProps } from 'types/api'

export default function TextoUnit({ noticia }: NoticiaUnitProps) {
  return (
    <>
      <Head>
        <title>{noticia.titulo} · Arthur Nestrovski</title>
      </Head>
      <Noticia noticia={noticia} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { noticias } = await client.request(GET_NOTICIAS)

  const paths = noticias.map((noticia: NoticiaProps) => {
    const slug = universalSlugify(noticia.titulo)
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { noticias } = await client.request(GET_NOTICIAS)
  const noticia = noticias.find((noticia: NoticiaProps) => {
    const noticiaSlug = universalSlugify(noticia.titulo)
    return params?.slug === noticiaSlug
  })
  return {
    props: {
      noticia,
    },
  }
}
