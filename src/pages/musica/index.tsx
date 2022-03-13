import client from 'graphql/client'
import GET_CDS from 'graphql/queries/getCds'
import type { GetStaticProps } from 'next'
import CDsPage from 'templates/CDs'
import { CDsProps } from 'types/api'

export default function Musica({ cDs }: CDsProps) {
  return <CDsPage cDs={cDs} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { cDs } = await client.request(GET_CDS)

  return {
    props: {
      cDs,
    },
  }
}
