import client from 'graphql/client'
import GET_CDS from 'graphql/queries/getCds'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import universalSlugify from 'services/slugifyHelper'
import CD from 'templates/CDs/cd'
import { CDProps, CDUnitProps } from 'types/api'

export default function CDUnit({ cD }: CDUnitProps) {
  return (
    <>
      <Head>
        <title>{cD.titulo} · Arthur Nestrovski</title>
      </Head>
      <CD cD={cD} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { cDs } = await client.request(GET_CDS)

  const paths = cDs.map((cd: CDProps) => {
    const slug = universalSlugify(cd.titulo)
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { cDs } = await client.request(GET_CDS)
  const cD = cDs.find((cd: CDProps) => {
    const cdSlug = universalSlugify(cd.titulo)
    return params?.slug === cdSlug
  })
  return {
    props: {
      cD,
    },
  }
}
