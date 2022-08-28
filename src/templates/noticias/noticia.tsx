/* eslint-disable @next/next/no-img-element */
import { Container, Paper, Typography } from '@mui/material'
import CustomBreadcrumbs from 'components/customBreadcrumbs'
import NavDrawer from 'components/navDrawer'
import { formatIsoString } from 'services/datesHelper'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { NoticiaUnitProps } from 'types/api'

export default function Noticia({ noticia }: NoticiaUnitProps) {
  const { createdAt, subtitulo, texto: conteudo, titulo, capa } = noticia
  const slug = universalSlugify(titulo)
  const date = createdAt ? formatIsoString(createdAt) : undefined
  const bc = {
    Notícias: 'noticias',
    [titulo]: slug,
  }

  return (
    <>
      <NavDrawer />
      <div style={{ margin: '16px 0', textAlign: 'center' }}>
        <CustomBreadcrumbs breadcrumbs={bc} />
      </div>
      <Container style={{ marginBottom: '100px' }}>
        <Paper sx={{ p: '24px' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ textAlign: 'center', color: 'primary.dark' }}
          >
            {titulo}
          </Typography>
          <Typography
            sx={{ textAlign: 'center', color: 'primary.dark', fontWeight: 500 }}
          >
            {subtitulo}
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '24px 0',
            }}
          >
            <img
              src={capa.url}
              alt="capa da notícia"
              style={{ maxWidth: '100%', maxHeight: '400px' }}
            />
          </div>
          <br />
          <Typography sx={{ fontWeight: 500 }}>{date ? date : ''}</Typography>
          <Typography component="div">
            <TurnHtmlStringToTag string={conteudo?.html} />
          </Typography>
        </Paper>
      </Container>
    </>
  )
}
