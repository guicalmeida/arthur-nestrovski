import client from 'graphql/client'
import GET_LIVROS from 'graphql/queries/getLivros'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import LivrosPage from 'templates/livros'
import { LivrosProps } from 'types/api'

export default function Livros({ livros, categoriasLivro }: LivrosProps) {
  return (
    <>
      <Head>
        <title>Livros · Arthur Nestrovski</title>
      </Head>
      <LivrosPage categoriasLivro={categoriasLivro} livros={livros} />
    </>
  )
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
