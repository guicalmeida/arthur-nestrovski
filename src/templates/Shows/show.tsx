/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { CSSProperties, ReactNode } from 'react'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { ShowUnitProps } from 'types/api'

const StyledPaper = styled(Paper)`
  display: flex;
  gap: 24px;
  padding: 16px;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

function SecondaryTitle({ children }: { children: ReactNode }) {
  return (
    <Typography
      component="h2"
      sx={{
        color: 'primary.main',
        fontSize: '20px',
        fontWeight: 500,
      }}
    >
      {children}
    </Typography>
  )
}

const Show = ({ show }: ShowUnitProps) => {
  const {
    descricao,
    titulo,
    artistas,
    fotos,
    mapaDoPalco,
    necessidadesTecnicas,
    repertorio,
    sobreOsArtistas,
    tipo,
  } = show || {}
  const slug = universalSlugify(titulo)

  const bc = {
    Shows: 'shows',
    [titulo]: slug,
  }

  const techInfo = {
    production: tipo,
    year: artistas,
  }

  let mobile = false

  if (typeof window !== 'undefined') {
    mobile = window.innerWidth <= 480
  }

  const noRepertorioStyle: CSSProperties = repertorio ? {} : { flexGrow: 1 }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc} technicalInfo={techInfo}>
        {titulo?.toUpperCase()}
      </NavHeader>
      <Container sx={{ mb: '100px' }}>
        <StyledPaper>
          <div
            style={
              mobile
                ? { ...noRepertorioStyle, width: '100%' }
                : { ...noRepertorioStyle }
            }
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img
                src={fotos?.[0]?.url}
                alt={`foto do show ${titulo}`}
                style={{
                  maxWidth: '552px',
                  objectFit: 'contain',
                  width: '100%',
                  maxHeight: '650px',
                }}
              />
            </Box>
          </div>
          {repertorio && repertorio.html && (
            <div style={{ maxWidth: '480px' }}>
              <SecondaryTitle>REPERTÓRIO</SecondaryTitle>
              <Typography component="div">
                <TurnHtmlStringToTag string={repertorio?.html} />
              </Typography>
            </div>
          )}
        </StyledPaper>
        <Paper sx={{ p: '24px', mt: '24px', mb: '24px' }}>
          {descricao && descricao.html && (
            <>
              <SecondaryTitle>DESCRIÇÃO</SecondaryTitle>
              <Typography component="div" sx={{ mb: '24px' }}>
                <TurnHtmlStringToTag string={descricao?.html} />
              </Typography>
            </>
          )}
          {sobreOsArtistas && sobreOsArtistas.html && (
            <>
              <SecondaryTitle>SOBRE OS ARTISTAS</SecondaryTitle>
              <Typography component="div" sx={{ mb: '24px' }}>
                <TurnHtmlStringToTag string={sobreOsArtistas?.html} />
              </Typography>
            </>
          )}
          {necessidadesTecnicas && necessidadesTecnicas.html && (
            <>
              <SecondaryTitle>NECESSIDADES TÉCNICAS</SecondaryTitle>
              <Typography component="div" sx={{ mb: '24px' }}>
                <TurnHtmlStringToTag string={necessidadesTecnicas?.html} />
              </Typography>
            </>
          )}
          {mapaDoPalco && mapaDoPalco.url && (
            <a href={mapaDoPalco.url} target="_blank" rel="noreferrer">
              <Button variant="outlined" size="large">
                Ver mapa do palco
              </Button>
            </a>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default Show
