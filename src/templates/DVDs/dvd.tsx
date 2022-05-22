/* eslint-disable @next/next/no-img-element */
import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { DVDUnitProps } from 'types/api'

const DVD = ({ dvd }: DVDUnitProps) => {
  const {
    ano,
    capa,
    descricao,
    realizacao,
    titulo,
    artistas,
    informacoesExtra,
  } = dvd || {}
  const slug = universalSlugify(titulo)

  const bc = {
    Música: 'musica',
    DVDs: 'dvds',
    [titulo]: slug,
  }

  const techInfo = {
    production: realizacao?.nome,
    year: ano?.ano,
  }

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 480
    }
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc} technicalInfo={techInfo}>
        {titulo?.toUpperCase()}
      </NavHeader>
      <Container>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={isMobile() ? { width: '100%' } : {}}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img
                src={capa?.url}
                alt={`capa do album ${titulo}`}
                style={{
                  maxWidth: '552px',
                  objectFit: 'contain',
                  padding: '24px',
                  width: '100%',
                }}
              />
            </Box>
          </div>
          <Paper sx={{ maxWidth: '500px', p: '24px', mt: '24px', mb: '24px' }}>
            <Typography component="h2" sx={{ fontWeight: 600 }}>
              Com {artistas}
            </Typography>
            <Typography component="div" sx={{ mb: '24px' }}>
              <TurnHtmlStringToTag string={descricao?.html} />
            </Typography>
            {informacoesExtra && (
              <>
                <Divider />

                <Typography
                  sx={{ whiteSpace: 'pre-line', mt: '24px' }}
                  color="rgb(169 169 169)"
                >
                  {informacoesExtra}
                </Typography>
              </>
            )}
          </Paper>
        </div>
      </Container>
    </>
  )
}

export default DVD
