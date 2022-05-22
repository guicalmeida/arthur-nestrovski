/* eslint-disable @next/next/no-img-element */
import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import CDsActionItems from 'components/CDActionItems'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { SpotifyEmbed } from 'services/spotfyEmbedHelper'
import { CDUnitProps } from 'types/api'

const CD = ({ cD }: CDUnitProps) => {
  const {
    ano,
    capa,
    creditos,
    descricao,
    faixas,
    realizacao,
    titulo,
    linkEmSpotify,
  } = cD || {}
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
          <div>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
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
              <CDsActionItems cD={cD} />
            </Box>
          </div>
          <div>
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
            <Typography sx={{ whiteSpace: 'pre-line', padding: '24px' }}>
              {faixas}
            </Typography>
          </div>
        </div>
        {(linkEmSpotify || descricao?.html || creditos) && (
          <Paper sx={{ p: '24px', mt: '24px', mb: '24px' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                margin: 'auto',
                height: '80px',
              }}
            >
              <SpotifyEmbed url={linkEmSpotify} />
            </div>
            <Typography component="div" sx={{ mb: '24px' }}>
              <TurnHtmlStringToTag string={descricao?.html} />
            </Typography>
            {creditos && (
              <>
                <Divider />

                <Typography
                  sx={{ whiteSpace: 'pre-line', mt: '24px' }}
                  color="rgb(169 169 169)"
                >
                  {creditos}
                </Typography>
              </>
            )}
          </Paper>
        )}
      </Container>
    </>
  )
}

export default CD
