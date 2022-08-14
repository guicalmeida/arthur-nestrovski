import client from 'graphql/client'
import GET_EVENTOS from 'graphql/queries/getEventos'
import type { GetStaticProps } from 'next'
import { EventoProps, EventosProps } from 'types/api'
import AgendaPage from 'templates/agenda'
import Head from 'next/head'

export default function Agenda({ eventos }: EventosProps) {
  return (
    <>
      <Head>
        <title>Agenda · Arthur Nestrovski</title>
      </Head>
      <AgendaPage eventos={eventos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let { eventos } = await client.request(GET_EVENTOS)
  eventos = await Promise.all(
    eventos.map(async (evento: EventoProps) => {
      const { latitude, longitude } = evento?.localizacao ?? {}

      if (latitude && longitude) {
        const call = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&email=guica.almeida@gmail.com`
        )
          .then((res) => {
            return res.json()
          })
          .catch(console.error)
        const { amenity, house_number, road, suburb, city, town } =
          (await call?.address) || {}
        const endereco = `${amenity ? amenity + ', ' : ''}${road ? road : ''}${
          house_number ? ', ' + house_number : ''
        }${suburb ? ' - ' + suburb : ''}${
          city || town ? ', ' + (city || town) : ''
        }`
        const result = { ...evento, endereco }
        const final = Object.fromEntries(
          Object.entries(result).filter(([, v]) => v != null)
        )
        return final
      } else {
        return Object.fromEntries(
          Object.entries(evento).filter(([, v]) => v != null)
        )
      }
    })
  ).catch(console.error)

  return {
    props: {
      eventos,
    },
  }
}
