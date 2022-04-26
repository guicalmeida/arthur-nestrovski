import client from 'graphql/client'
import GET_EVENTOS from 'graphql/queries/getEventos'
import type { GetStaticProps } from 'next'
import { EventosProps } from 'types/api'
import AgendaPage from 'templates/agenda'

export default function Agenda({ eventos }: EventosProps) {
  return <AgendaPage eventos={eventos} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { eventos } = await client.request(GET_EVENTOS)

  return {
    props: {
      eventos,
    },
  }
}
