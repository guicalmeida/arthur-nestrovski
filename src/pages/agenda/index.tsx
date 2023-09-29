import client from 'graphql/client'
import GET_EVENTOS from 'graphql/queries/getEventos'
import type { GetStaticProps } from 'next'
import { EventosProps } from 'types/api'
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
  const { eventos } = await client.request(GET_EVENTOS)

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const updatedEventos = []
  for (const evento of eventos) {
    const { latitude, longitude } = evento?.localizacao ?? {}

    if (latitude && longitude) {
      await delay(500) // Add a 500ms delay here

      try {
        const call = await fetch(
          `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
        )

        const data = await call.json()
        const { amenity, house_number, road, suburb, city, town } =
          data?.address || {}
        const endereco = `${amenity ? amenity + ', ' : ''}${road ? road : ''}${
          house_number ? ', ' + house_number : ''
        }${suburb ? ' - ' + suburb : ''}${
          city || town ? ', ' + (city || town) : ''
        }`
        const result = { ...evento, endereco }
        const final = Object.fromEntries(
          Object.entries(result).filter(([, v]) => v != null)
        )
        updatedEventos.push(final)
      } catch (error) {
        console.error(error)
      }
    } else {
      const filteredEvento = Object.fromEntries(
        Object.entries(evento).filter(([, v]) => v != null)
      )
      updatedEventos.push(filteredEvento)
    }
  }

  return {
    props: {
      eventos: updatedEventos,
    },
  }
}
