import client from 'graphql/client'
import GET_LIVROS from 'graphql/queries/getLivros'
import { GetStaticPaths, GetStaticProps } from 'next'
import universalSlugify from 'services/slugifyHelper'
import Livro from 'templates/home/livros/livro'
import { LivroProps, LivrosProps, LivroUnitProps } from 'types/api'

export default function livro({ livro }: LivroUnitProps) {
  return <Livro livro={livro}></Livro>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { livros } = await client.request<LivrosProps>(GET_LIVROS)

  const paths = livros.map((livro) => {
    const slug = universalSlugify(livro.titulo)
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { livros, categoriasLivro } = await client.request(GET_LIVROS)

  const livro = livros.find((livro: LivroProps) => {
    const livroSlug = universalSlugify(livro.titulo)
    return params?.slug === livroSlug
  })

  return {
    props: {
      livro,
      livros,
      categoriasLivro,
    },
  }
}
