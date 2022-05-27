import client from 'graphql/client'
import GET_VIDEOS from 'graphql/queries/getVideos'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import VideosPage from 'templates/videos'
import { VideosProps } from 'types/api'

export default function Perfil({ videos }: VideosProps) {
  return (
    <>
      <Head>
        <title>Vídeos · Arthur Nestrovski</title>
      </Head>
      <VideosPage videos={videos} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { videos } = await client.request(GET_VIDEOS)

  return {
    props: {
      videos,
    },
  }
}
