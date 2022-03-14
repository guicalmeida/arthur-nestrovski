import client from 'graphql/client'
import GET_LYRICS from 'graphql/queries/getLyrics'
import type { GetStaticProps } from 'next'
import LetrasPage from 'templates/Letras'
import { LetrasProps } from 'types/api'

export default function Letras({ letras }: LetrasProps) {
  return <LetrasPage letras={letras} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { letras } = await client.request(GET_LYRICS)

  return {
    props: {
      letras,
    },
  }
}
