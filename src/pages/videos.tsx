import client from 'graphql/client'
import GET_VIDEOS from 'graphql/queries/getVideos'
import { GetStaticProps } from 'next'
import VideosPage from 'templates/videos'
import { VideosProps } from 'types/api'

export default function Perfil({ videos }: VideosProps) {
  return <VideosPage videos={videos} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { videos } = await client.request(GET_VIDEOS)

  return {
    props: {
      videos,
    },
  }
}
