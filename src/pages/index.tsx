import client from 'graphql/client'
import GET_LIVROS from 'graphql/queries/getLivros'
import type { GetStaticProps } from 'next'
import HomeContainer from 'templates/home/home'
import { LivrosProps } from 'types/api'

export default function Home({ livros }: LivrosProps) {
  return (
    <div>
      <HomeContainer></HomeContainer>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { livros } = await client.request(GET_LIVROS)

//   return {
//     props: {
//       livros,
//     },
//   }
// }
