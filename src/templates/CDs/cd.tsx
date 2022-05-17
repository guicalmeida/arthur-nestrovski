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
  const slug = universalSlugify(cD?.titulo)

  const bc = {
    Música: 'musica',
    CDs: 'cds',
    [cD?.titulo]: slug,
  }

  const techInfo = {
    production: cD?.realizacao?.nome,
    year: cD?.ano?.ano,
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc} technicalInfo={techInfo}>
        {cD?.titulo?.toUpperCase()}
      </NavHeader>
      <Container>
        <div
          style={{
            display: 'flex',
            gap: '24px',
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
                src={cD?.capa?.url}
                alt={`capa do album ${cD.titulo}`}
                style={{
                  maxWidth: '552px',
                  objectFit: 'contain',
                  padding: '24px',
                }}
              />
              <CDsActionItems cD={cD} />
            </Box>
          </div>
          <div>
            <Typography sx={{ whiteSpace: 'pre-line', padding: '24px' }}>
              {cD.faixas}
            </Typography>
          </div>
        </div>
        <Paper sx={{ p: '24px', mt: '24px', mb: '24px' }}>
          <div style={{ width: '500px', margin: 'auto', height: '80px' }}>
            <SpotifyEmbed url={cD.linkEmSpotify} />
          </div>
          <Typography component="div" sx={{ mb: '24px' }}>
            <TurnHtmlStringToTag string={cD?.descricao?.html} />
          </Typography>
          {cD.creditos && (
            <>
              <Divider />

              <Typography
                sx={{ whiteSpace: 'pre-line', mt: '24px' }}
                color="rgb(169 169 169)"
              >
                {cD.creditos}
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default CD
