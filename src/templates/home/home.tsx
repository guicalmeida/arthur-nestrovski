import { Box, Container, Typography } from '@mui/material'
import HeroSection from 'components/heroSection'
import MostRecent from 'components/mostRecent'
import NavDrawer from 'components/navDrawer'
import SideItemCard from 'components/sideItemCard'
import { GaleriaProps, HomeProps } from 'types/api'

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
  return (
    <>
      <HeroSection />
      <NavDrawer />
      <Container>
        <Box
          id="firstRow"
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{ fontWeight: 600, color: 'primary.main' }}
          >
            MÚSICA
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
            }}
          ></Box>
        </Box>
      </Container>
    </>
  )
}

export default HomeContainer
