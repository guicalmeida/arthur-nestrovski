import client from 'graphql/client'
import GET_LIVROS from 'graphql/queries/getLivros'
import GET_COVERS from 'graphql/queries/getMusicCovers'
import GET_TEXTOS from 'graphql/queries/getTextos'
import { GetStaticProps } from 'next'
import EscritaPage from 'templates/escrita'
import { EscritaProps } from 'types/groups'

export default function Escrita({
  textos,
  livros,
  partiturasCover,
}: EscritaProps) {
  return (
    <EscritaPage
      livros={livros}
      textos={textos}
      partiturasCover={partiturasCover}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { textos } = await client.request(GET_TEXTOS)
  const { livros } = await client.request(GET_LIVROS)
  const { partiturasCover } = await client.request(GET_COVERS)

  return {
    props: {
      textos,
      livros,
      partiturasCover,
    },
  }
}
