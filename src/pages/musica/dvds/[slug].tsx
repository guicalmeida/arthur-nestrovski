import client from 'graphql/client'
import GET_DVDS from 'graphql/queries/getDvds'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import universalSlugify from 'services/slugifyHelper'
import DVD from 'templates/DVDs/dvd'
import { DVDProps, DVDUnitProps } from 'types/api'

export default function DVDUnit({ dvd }: DVDUnitProps) {
  return (
    <>
      <Head>
        <title>{dvd.titulo} · Arthur Nestrovski</title>
      </Head>
      <DVD dvd={dvd} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { dvds } = await client.request(GET_DVDS)

  const paths = dvds.map((dvd: DVDProps) => {
    const slug = universalSlugify(dvd.titulo)
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { dvds } = await client.request(GET_DVDS)
  const dvd = dvds.find((dvd: DVDProps) => {
    const dvdSlug = universalSlugify(dvd.titulo)
    return params?.slug === dvdSlug
  })
  return {
    props: {
      dvd,
    },
  }
}
