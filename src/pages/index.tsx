import delay from 'delay'
import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import GET_COVERS from 'graphql/queries/getMusicCovers'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import HomeContainer from 'templates/home/home'
import { EventoProps, GaleriaProps, HomeProps } from 'types/api'

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
  const mappedEventos = await Promise.all(
    home.eventos?.map(async (evento: EventoProps) => {
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
        return result
      } else {
        return evento
      }
    })
  ).catch(console.error)

  home.eventos = mappedEventos || []
  return {
    props: {
      home,
      letrasCover,
      partiturasCover,
    },
  }
}
