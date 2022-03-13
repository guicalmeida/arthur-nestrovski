import client from 'graphql/client'
import GET_DVDS from 'graphql/queries/getDvds'
import type { GetStaticProps } from 'next'
import DVDsPage from 'templates/DVDs'
import { DVDsProps } from 'types/api'

export default function DVDs({ dvds }: DVDsProps) {
  return <DVDsPage dvds={dvds} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { dvds } = await client.request(GET_DVDS)

  return {
    props: {
      dvds,
    },
  }
}
