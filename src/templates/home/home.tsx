/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AmazonMusic from 'icons/AmazonMusic'
import AppleMusic from 'icons/appleMusic'
import Deezer from 'icons/Deezer'
import Spotify from 'icons/spotify'
import Tidal from 'icons/Tidal'
import YoutubeMusic from 'icons/YoutubeMusic'
import { Box, Card, CardMedia, Container, Divider } from '@mui/material'
import HeroSection from 'components/heroSection'
import HomeItemCard from 'components/homeItemCard'
import HomeTextCard from 'components/homeTextCard'
import MostRecent from 'components/mostRecent'
import NavDrawer from 'components/navDrawer'
import { formatIsoString } from 'services/datesHelper'
import { getShortDescription } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { GaleriaProps, HomeProps } from 'types/api'
import { getEventDateInfo } from 'services/datesHelper'
import HomeEventCard from 'components/homeEventCard'
import { SpotifyEmbed } from 'services/spotfyEmbedHelper'
import { getYoutubeEmbedLink } from 'services/youtubeHelper'
import HomeVideoCard from 'components/HomeVideoCard'
import useWindowSize from 'hooks/useWindowResize'
import CustomizedIcon from 'components/CustomIconButton'

const MainDivider = ({
  margin,
  width = '500px',
}: {
  margin: string
  width?: string
}) => {
  return (
    <Divider
      variant="middle"
      sx={{
        width,
        height: '3px',
        borderTop: '2px solid',
        borderColor: 'primary.main',
        margin,
      }}
    />
  )
}

const HomeContainer = ({
  home,
  letrasCover,
  partiturasCover,
}: {
  home: HomeProps
  letrasCover: GaleriaProps
  partiturasCover: GaleriaProps
}) => {
  const {
    cDs,
    eventos,
    letras,
    livros,
    noticias,
    partiturasECifras,
    textos,
    videos,
  } = home || {}

  const { capa, fim, inicio, titulo: eventTitle, endereco } = eventos?.[0]
  const eventSlug = universalSlugify(eventTitle)
  const eventDate = getEventDateInfo(inicio, fim)

  const textSlug = universalSlugify(textos[0].titulo)
  const textShort = getShortDescription(textos?.[0]?.texto.html)

  const newsSlug = universalSlugify(noticias?.[0]?.titulo)
  const newsShort = getShortDescription(noticias?.[0]?.texto?.html)

  const youtubeEmbed = getYoutubeEmbedLink(videos?.[0].linkDoVideoYouTube)

  const eventProps = {
    title: eventTitle,
    date: eventDate,
    address: endereco,
    path: eventSlug,
    cover: capa?.url,
    startDate: inicio,
  }

  const { width } = useWindowSize() || {}
  const isMobile = width! <= 1000

  const MobileSpacing = () => {
    if (isMobile) {
      return (
        <div
          id="DIVISOR"
          style={{ margin: '16px 0', width: '100%', height: '1px' }}
        ></div>
      )
    }
    return <></>
  }
  return (
    <>
      <HeroSection />
      <NavDrawer />
      <MainDivider margin="64px auto" width={isMobile ? '80%' : '500px'} />
      <Container sx={{ mb: '100px' }}>
        <Box
          id="firstRow"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mt: 3,
              width: '100%',
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isMobile ? 'center' : 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  flexDirection: isMobile ? 'column' : 'row',
                  marginBottom: '24px',
                }}
              >
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    marginBottom: '24px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                    }}
                  >
                    <CustomizedIcon linkUrl="https://music.amazon.com.br/artists/B000TOMX48/arthur-nestrovski">
                      <AmazonMusic />
                    </CustomizedIcon>
                    <CustomizedIcon linkUrl="https://music.apple.com/br/artist/arthur-nestrovski/1380781367">
                      <AppleMusic />
                    </CustomizedIcon>
                    <CustomizedIcon linkUrl="https://open.spotify.com/artist/1dAXvu8Acv0udPk13oIy1p">
                      <Spotify />
                    </CustomizedIcon>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                      marginTop: '16px',
                    }}
                  >
                    <CustomizedIcon linkUrl="https://www.deezer.com/br/artist/1294721">
                      <Deezer />
                    </CustomizedIcon>
                    <CustomizedIcon linkUrl="https://tidal.com/browse/artist/4255413">
                      <Tidal />
                    </CustomizedIcon>
                    <CustomizedIcon linkUrl="https://music.youtube.com/channel/UCeOsXAob_TlCTXulpgKEbMA">
                      <YoutubeMusic />
                    </CustomizedIcon>
                  </div>
                </Box>
                <div
                  style={{
                    width: isMobile ? '100%' : '500px',
                    height: '155px',
                    margin: '0 0 auto auto',
                  }}
                >
                  <SpotifyEmbed url={cDs?.[0]?.linkEmSpotify} />
                </div>
              </Box>
              <MobileSpacing />
              <HomeTextCard
                text={{
                  title: noticias?.[0]?.titulo,
                  subtitle: noticias?.[0]?.subtitulo,
                  date: formatIsoString(noticias?.[0]?.createdAt),
                }}
                title="Notícias"
                path={`noticias/${newsSlug}`}
              >
                {newsShort}
              </HomeTextCard>
            </Box>
            <MobileSpacing />
            <HomeEventCard props={eventProps}></HomeEventCard>
          </Box>
        </Box>
        <Box
          id="secondRow"
          sx={{
            mt: 8,
            mb: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'space-between',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <HomeItemCard
              imageUrl={cDs?.[0]?.capa?.url}
              title="CDs"
              latestTitle={cDs?.[0]?.titulo}
              path="musica/cds"
            >
              <MostRecent
                publisher={cDs?.[0]?.realizacao?.nome}
                title={cDs?.[0]?.titulo}
                year={cDs?.[0]?.ano?.ano}
              />
            </HomeItemCard>
            <MobileSpacing />
            <HomeItemCard
              imageUrl={letrasCover?.foto?.url}
              title="Letras"
              latestTitle={letras?.[0]?.titulo}
              path="musica/letras"
              hasQParam
            >
              <MostRecent
                publisher={letras?.[0]?.composicao}
                title={letras?.[0]?.titulo}
              />
            </HomeItemCard>
            <MobileSpacing />
            <HomeItemCard
              imageUrl={partiturasCover?.foto?.url}
              title="Partituras e Cifras"
              latestTitle={partiturasECifras?.[0]?.titulo}
              path="musica/partituras-e-cifras"
              hasQParam
            >
              <MostRecent
                publisher={partiturasECifras?.[0]?.composicao}
                title={partiturasECifras?.[0]?.titulo}
              />
            </HomeItemCard>
          </Box>
        </Box>
        <Box
          id="thirdRow"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              width: '100%',
              justifyContent: isMobile ? 'center' : 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isMobile ? 'center' : 'space-between',
              }}
            >
              <div>
                <HomeItemCard
                  imageUrl={livros?.[0]?.capa?.url}
                  title="Livros"
                  latestTitle={livros?.[0]?.titulo}
                  path="escrita/livros"
                >
                  <MostRecent
                    publisher={livros?.[0]?.editora?.titulo}
                    title={livros?.[0]?.titulo}
                    year={livros?.[0]?.ano?.ano}
                  />
                </HomeItemCard>
              </div>
              <MobileSpacing />
              <div>
                <HomeVideoCard>
                  <MostRecent title={videos?.[0]?.titulo} />
                </HomeVideoCard>
              </div>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ order: isMobile ? 1 : 0 }}>
                <HomeTextCard
                  text={{
                    title: textos?.[0]?.titulo,
                    subtitle: textos?.[0]?.subtitulo,
                    date: formatIsoString(textos?.[0]?.createdAt),
                  }}
                  path={`/escrita/textos/${textSlug}`}
                  title="Textos"
                >
                  {textShort}
                </HomeTextCard>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flexGrow: 1,
                }}
              >
                <Card
                  sx={{
                    order: isMobile ? 0 : 1,
                    width: isMobile ? '100%' : '740px',
                    mt: '36px',
                    height: isMobile ? '200px' : '450px',
                  }}
                >
                  <CardMedia
                    src={youtubeEmbed}
                    component="iframe"
                    sx={{ height: '100%', border: 'none' }}
                    loading="lazy"
                  />
                </Card>
                <MobileSpacing />
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomeContainer
