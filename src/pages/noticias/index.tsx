import client from 'graphql/client'
import GET_NOTICIAS from 'graphql/queries/getNoticias'
import type { GetStaticProps } from 'next'
import NoticiasPage from 'templates/noticias'
import { NoticiasProps } from 'types/api'

export default function Noticias({ noticias }: NoticiasProps) {
  return <NoticiasPage noticias={noticias} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { noticias } = await client.request(GET_NOTICIAS)

  return {
    props: {
      noticias,
    },
  }
}
