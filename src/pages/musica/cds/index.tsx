import client from 'graphql/client'
import GET_CDS from 'graphql/queries/getCds'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import CDsPage from 'templates/CDs'
import { CDsProps } from 'types/api'

export default function CDs({ cDs }: CDsProps) {
  return (
    <>
      <Head>
        <title>CDs · Arthur Nestrovski</title>
      </Head>
      <CDsPage cDs={cDs} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { cDs } = await client.request(GET_CDS)

  return {
    props: {
      cDs,
    },
  }
}
