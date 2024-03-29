import { Container, Paper, Typography } from '@mui/material'
import CustomBreadcrumbs from 'components/customBreadcrumbs'
import Link from 'components/link'
import NavDrawer from 'components/navDrawer'
import { formatIsoString } from 'services/datesHelper'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { TextoUnitProps } from 'types/api'

export default function Texto({ texto }: TextoUnitProps) {
  const {
    autores,
    createdAt,
    linkOriginal,
    subtitulo,
    texto: conteudo,
    titulo,
    veiculoDeDivulgacao,
  } = texto
  const slug = universalSlugify(titulo)
  const date = createdAt ? formatIsoString(createdAt) : undefined
  const bc = {
    Escrita: 'escrita',
    Textos: 'textos',
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
          <br />
          <Typography sx={{ fontWeight: 500 }}>
            {autores ? 'Por ' + autores : ''}
          </Typography>
          <Typography sx={{ fontWeight: 500 }}>{date ? date : ''}</Typography>
          <Typography component="div">
            <TurnHtmlStringToTag string={conteudo?.html} />
          </Typography>
          {veiculoDeDivulgacao && (
            <>
              <br />
              <Typography>Publicado em {veiculoDeDivulgacao}</Typography>
            </>
          )}
          {linkOriginal && (
            <Link link={linkOriginal}>[link da publicação]</Link>
          )}
        </Paper>
      </Container>
    </>
  )
}
