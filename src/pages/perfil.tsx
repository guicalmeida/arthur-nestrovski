import client from 'graphql/client'
import GET_PERFIL from 'graphql/queries/getPerfil'
import { GetStaticProps } from 'next'
import PerfilPage from 'templates/perfil'
import { PerfilProps } from 'types/api'

export default function Perfil({ foto, cv }: PerfilProps) {
  return <PerfilPage foto={foto} cv={cv} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { foto, cv } = await client.request(GET_PERFIL)

  return {
    props: {
      foto,
      cv,
    },
  }
}
