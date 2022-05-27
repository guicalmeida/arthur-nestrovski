import client from 'graphql/client'
import GET_SHOWS from 'graphql/queries/getShows'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import universalSlugify from 'services/slugifyHelper'
import { ShowProps, ShowUnitProps } from 'types/api'
import Show from '../../templates/Shows/show'

export default function TextoUnit({ show }: ShowUnitProps) {
  return (
    <>
      <Head>
        <title>{show.titulo} · Arthur Nestrovski</title>
      </Head>
      <Show show={show} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { shows } = await client.request(GET_SHOWS)

  const paths = shows.map((show: ShowProps) => {
    const slug = universalSlugify(show.titulo)
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { shows } = await client.request(GET_SHOWS)
  const show = shows.find((show: ShowProps) => {
    const showSlug = universalSlugify(show.titulo)
    return params?.slug === showSlug
  })
  return {
    props: {
      show,
    },
  }
}
