import { Box, Container, Divider } from '@mui/material'
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
    galerias,
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

  const newsSlug = universalSlugify(noticias[0].titulo)
  const newsShort = getShortDescription(noticias?.[0]?.texto?.html)

  const eventProps = {
    title: eventTitle,
    date: eventDate,
    address: endereco,
    path: eventSlug,
    cover: capa?.url,
    startDate: inicio,
  }
  return (
    <>
      <HeroSection />
      <NavDrawer />
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
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Box>
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

            <HomeEventCard props={eventProps}></HomeEventCard>
          </Box>
        </Box>
        <Box
          id="secondRow"
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
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
            <HomeItemCard
              imageUrl={letrasCover?.foto?.url}
              title="Letras"
              latestTitle={letras?.[0]?.titulo}
              path="musica/letras"
            >
              <MostRecent
                publisher={letras?.[0]?.composicao}
                title={letras?.[0]?.titulo}
              />
            </HomeItemCard>
            <HomeItemCard
              imageUrl={partiturasCover?.foto?.url}
              title="Partituras e Cifras"
              latestTitle={partiturasECifras?.[0]?.titulo}
              path="musica/partituras-e-cifras"
            >
              <MostRecent
                publisher={partiturasECifras?.[0]?.composicao}
                title={partiturasECifras?.[0]?.titulo}
              />
            </HomeItemCard>
          </Box>
        </Box>
        <Divider
          variant="middle"
          sx={{
            width: '500px',
            height: '3px',
            borderTop: '2px solid',
            borderColor: 'primary.main',
            margin: '64px auto',
          }}
        />
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
              justifyContent: 'space-between',
            }}
          >
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
            <Box>
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
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomeContainer
