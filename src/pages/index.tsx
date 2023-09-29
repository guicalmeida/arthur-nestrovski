import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import GET_COVERS from 'graphql/queries/getMusicCovers'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import HomeContainer from 'templates/home/home'
import { GaleriaProps, HomeProps } from 'types/api'

export default function Home({
  home,
  letrasCover,
  partiturasCover,
}: {
  home: HomeProps
  letrasCover: GaleriaProps
  partiturasCover: GaleriaProps
}) {
  return (
    <>
      <Head>
        <title>Página inicial · Arthur Nestrovski</title>
      </Head>
      <div>
        <HomeContainer
          home={home}
          letrasCover={letrasCover}
          partiturasCover={partiturasCover}
        ></HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.request<HomeProps>(GET_HOME)
  const { letrasCover, partiturasCover } = await client.request(GET_COVERS)

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const updatedEventos = []
  for (const evento of home.eventos) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  home.eventos = (updatedEventos as any) || []
  return {
    props: {
      home,
      letrasCover,
      partiturasCover,
    },
  }
}
