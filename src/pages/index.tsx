import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import GET_COVERS from 'graphql/queries/getMusicCovers'
import type { GetStaticProps } from 'next'
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
    <div>
      <HomeContainer
        home={home}
        letrasCover={letrasCover}
        partiturasCover={partiturasCover}
      ></HomeContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.request<HomeProps>(GET_HOME)
  const { letrasCover, partiturasCover } = await client.request(GET_COVERS)
  return {
    props: {
      home,
      letrasCover,
      partiturasCover,
    },
  }
}
