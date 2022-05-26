import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import type { GetStaticProps } from 'next'
import HomeContainer from 'templates/home/home'
import { HomeProps } from 'types/api'

export default function Home({ home }: { home: HomeProps }) {
  return (
    <div>
      <HomeContainer home={home}></HomeContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.request<HomeProps>(GET_HOME)

  return {
    props: {
      home,
    },
  }
}
