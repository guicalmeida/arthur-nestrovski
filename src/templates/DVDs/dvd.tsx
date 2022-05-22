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
    CDs: 'cds',
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
          <div style={{ maxWidth: '480px' }}>
            <Typography
              component="h2"
              sx={{
                color: 'primary.main',
                pl: '24px',
                pt: '24px',
                fontSize: '20px',
                fontWeight: 500,
              }}
            >
              FAIXAS
            </Typography>
            <Typography
              sx={{ whiteSpace: 'pre-line', padding: '24px', pr: '0px' }}
            ></Typography>
          </div>
        </div>
        <Paper sx={{ p: '24px', mt: '24px', mb: '24px' }}>
          <Typography component="div" sx={{ mb: '24px' }}>
            <TurnHtmlStringToTag string={descricao?.html} />
          </Typography>
        </Paper>
      </Container>
    </>
  )
}

export default DVD
