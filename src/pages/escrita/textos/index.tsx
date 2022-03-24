import client from 'graphql/client'
import GET_TEXTOS from 'graphql/queries/getTextos'
import type { GetStaticProps } from 'next'
import TextosPage from 'templates/textos'
import { TextosProps } from 'types/api'

export default function Textos({ textos }: TextosProps) {
  return <TextosPage textos={textos} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { textos } = await client.request(GET_TEXTOS)

  return {
    props: {
      textos,
    },
  }
}
