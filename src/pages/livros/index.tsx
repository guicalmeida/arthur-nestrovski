import client from 'graphql/client'
import GET_LIVROS from 'graphql/queries/getLivros'
import type { GetStaticProps } from 'next'
import LivrosPage from 'templates/home/livros'
import { LivrosProps } from 'types/api'

export default function Livros({ livros, categoriasLivro }: LivrosProps) {
  return <LivrosPage categoriasLivro={categoriasLivro} livros={livros} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { livros, categoriasLivro } = await client.request(GET_LIVROS)

  return {
    props: {
      livros,
      categoriasLivro,
    },
  }
}
