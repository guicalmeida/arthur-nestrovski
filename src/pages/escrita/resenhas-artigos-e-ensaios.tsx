import client from 'graphql/client'
import GET_INTELECTUAL from 'graphql/queries/getIntelectual'
import { GetStaticProps } from 'next'
import IntelectualPage from 'templates/producoesIntelectuais'
import { ProducoesIntelectuaisProps } from 'types/api'

export default function Perfil({ page1, page2 }: ProducoesIntelectuaisProps) {
  return <IntelectualPage page1={page1} page2={page2} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { page1, page2 } = await client.request(GET_INTELECTUAL)

  return {
    props: {
      page1,
      page2,
    },
  }
}
