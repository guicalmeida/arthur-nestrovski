import { Box, Container, Typography } from '@mui/material'
import HeroSection from 'components/heroSection'
import NavDrawer from 'components/navDrawer'
import { HomeProps } from 'types/api'

const HomeContainer = ({ home }: { home: HomeProps }) => {
  console.log(home)
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
          >
            <Box>
              <Typography
                component="h3"
                variant="h4"
                sx={{ fontWeight: 500, color: 'primary.dark' }}
              >
                CDs
              </Typography>
            </Box>
            <Box>
              <Typography
                component="h3"
                variant="h4"
                sx={{ fontWeight: 500, color: 'primary.dark' }}
              >
                Letras
              </Typography>
            </Box>
            <Box>
              <Typography
                component="h3"
                variant="h4"
                sx={{ fontWeight: 500, color: 'primary.dark' }}
              >
                Partituras & Cifras
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomeContainer
