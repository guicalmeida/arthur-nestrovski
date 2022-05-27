import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import universalSlugify from 'services/slugifyHelper'
import { getYoutubeEmbedLink } from 'services/youtubeHelper'
import { VideosProps } from 'types/api'

export default function VideosPage({ videos }: VideosProps) {
  const bc = {
    Vídeos: 'videos',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>VÍDEOS</NavHeader>
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
          mb: '100px',
        }}
      >
        {videos.map((video) => {
          const embedUrl = getYoutubeEmbedLink(video.linkDoVideoYouTube)
          const slug = universalSlugify(video.titulo)
          return (
            <Card key={slug} sx={{ width: '560px', height: '620px' }}>
              <CardMedia
                src={embedUrl}
                component="iframe"
                sx={{ height: '320px', border: 'none' }}
                loading="lazy"
              />
              <CardContent
                sx={{
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography component="h2" variant="h5">
                  {video.titulo}
                </Typography>
                <Typography
                  component="div"
                  sx={{ overflowY: 'auto' }}
                  dangerouslySetInnerHTML={{ __html: video.descricao.html }}
                ></Typography>
              </CardContent>
            </Card>
          )
        })}
      </Container>
    </>
  )
}
