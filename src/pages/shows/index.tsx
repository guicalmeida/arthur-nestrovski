import client from 'graphql/client'
import GET_SHOWS from 'graphql/queries/getShows'
import { GetStaticProps } from 'next'
import ShowsPage from 'templates/Shows'
import { ShowsProps } from 'types/api'

export default function Perfil({ shows }: ShowsProps) {
  return <ShowsPage shows={shows} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { shows } = await client.request(GET_SHOWS)

  return {
    props: {
      shows,
    },
  }
}
