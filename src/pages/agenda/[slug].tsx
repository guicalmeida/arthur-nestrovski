import client from 'graphql/client'
import GET_EVENTOS from 'graphql/queries/getEventos'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import universalSlugify from 'services/slugifyHelper'
import Evento from 'templates/agenda/evento'
import { EventoProps, EventoUnitProps } from 'types/api'

export default function TextoUnit({ evento }: EventoUnitProps) {
  return (
    <>
      <Head>
        <title>{evento.titulo} · Arthur Nestrovski</title>
      </Head>
      <Evento evento={evento} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { eventos } = await client.request(GET_EVENTOS)

  const paths = eventos.map((evento: EventoProps) => {
    const slug = universalSlugify(evento.titulo)
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { eventos } = await client.request(GET_EVENTOS)

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedEventos = [] as any

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

  const evento = updatedEventos.find((evento: EventoProps) => {
    const eventoSlug = universalSlugify(evento.titulo)
    return params?.slug === eventoSlug
  })

  return {
    props: {
      evento,
    },
  }
}
