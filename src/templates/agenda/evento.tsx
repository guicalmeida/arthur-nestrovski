/* eslint-disable @next/next/no-img-element */
import { Box, Container, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { getEventDateInfo } from 'services/datesHelper'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { EventoUnitProps } from 'types/api'

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  align-items: center;
`

function ThisMap({
  latitude,
  longitude,
  endereco,
}: {
  latitude?: number
  longitude?: number
  endereco?: string
}) {
  const Map = useMemo(
    () =>
      dynamic(() => import('../../components/map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false, // This line is important. It's what prevents server-side render
      }),
    []
  )
  return <Map latitude={latitude} longitude={longitude} endereco={endereco} />
}

const Evento = ({ evento }: EventoUnitProps) => {
  const { descricao, fim, inicio, titulo, url, endereco, localizacao } =
    evento || {}

  const eventDate = getEventDateInfo(inicio, fim)
  const { latitude, longitude } = localizacao || {}
  const slug = universalSlugify(titulo)

  const bc = {
    Agenda: 'agenda',
    [titulo]: slug,
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc} titleStyle={{ fontSize: '3rem' }}>
        {titulo?.toUpperCase()}
      </NavHeader>
      <Container style={{ marginBottom: '100px' }}>
        <StyledPaper>
          {latitude && longitude && (
            <div style={{ width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  gap: '16px',
                }}
              >
                <ThisMap
                  latitude={latitude}
                  longitude={longitude}
                  endereco={endereco}
                />
                <Typography sx={{ fontWeight: 500 }}>{endereco}</Typography>
              </Box>
            </div>
          )}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '55rem',
              gap: '24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {eventDate && (
              <Typography
                component="h2"
                sx={{
                  color: 'primary.main',
                  fontSize: '28px',
                  fontWeight: 500,
                }}
              >
                {eventDate}
              </Typography>
            )}
            <Typography component="div">
              {descricao && descricao.html && (
                <TurnHtmlStringToTag string={descricao?.html} />
              )}
            </Typography>
            {url && (
              <a href={`/${url}`} style={{ textDecoration: 'underline' }}>
                <Typography>{url}</Typography>
              </a>
            )}
          </div>
        </StyledPaper>
      </Container>
    </>
  )
}

export default Evento
