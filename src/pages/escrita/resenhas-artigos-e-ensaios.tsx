import client from 'graphql/client'
import GET_INTELECTUAL from 'graphql/queries/getIntelectual'
import { GetStaticProps } from 'next'
import IntelectualPage from 'templates/producoesIntelectuais'
import { ProducoesIntelectuaisProps } from 'types/api'

export default function Perfil({
  producoesIntelectuais,
}: ProducoesIntelectuaisProps) {
  return <IntelectualPage producoesIntelectuais={producoesIntelectuais} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { producoesIntelectuais } = await client.request(GET_INTELECTUAL)

  return {
    props: {
      producoesIntelectuais,
    },
  }
}
