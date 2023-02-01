import delay from 'delay'
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
  let { eventos } = await client.request(GET_EVENTOS)
  eventos = await Promise.all(
    eventos.map(async (evento: EventoProps) => {
      const { latitude, longitude } = evento?.localizacao ?? {}

      if (latitude && longitude) {
        await delay(100)
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

  const evento = eventos.find((evento: EventoProps) => {
    const eventoSlug = universalSlugify(evento.titulo)
    return params?.slug === eventoSlug
  })
  return {
    props: {
      evento,
    },
  }
}
