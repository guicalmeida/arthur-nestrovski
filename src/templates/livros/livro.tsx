/* eslint-disable @next/next/no-img-element */
import { Box, Container, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { TurnHtmlStringToTag } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { LivroUnitProps } from 'types/api'

const StyledPaper = styled(Paper)`
  display: flex;
  gap: 24px;
  padding: 16px;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Livro = ({ livro }: LivroUnitProps) => {
  const {
    ano,
    capa,
    descricao,
    titulo,
    autor,
    categoriaLivro,
    cidade,
    editora,
    isbn,
    ilustracoes,
    subtitulo,
  } = livro || {}
  const slug = universalSlugify(titulo)

  const availableInfo = [
    ano?.ano,
    editora?.titulo,
    cidade?.titulo,
    categoriaLivro?.titulo,
  ]
    .filter((a) => !!a)
    .join(' · ')

  const bc = {
    Escrita: 'escrita',
    Livros: 'livros',
    [titulo]: slug,
  }

  const subtitle = {
    production: subtitulo,
  }

  const isMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 480
    }
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc} technicalInfo={subtitle}>
        {titulo?.toUpperCase()}
      </NavHeader>
      <Container>
        <StyledPaper>
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
                alt={`capa do livro ${titulo}`}
                style={{
                  maxWidth: '552px',
                  maxHeight: '640px',
                  minWidth: '300px',
                  objectFit: 'contain',
                  width: '100%',
                }}
              />
            </Box>
          </div>
          <div style={{ maxWidth: '640px' }}>
            <Typography
              component="h2"
              sx={{
                color: 'primary.main',
                fontSize: '24px',
                fontWeight: 500,
              }}
            >
              Por {autor}
              {ilustracoes ? '; ilustrações por ' + ilustracoes : ''}
              <br />
            </Typography>
            <Typography
              sx={{
                color: 'primary.main',
                fontSize: '18px',
                fontWeight: 400,
              }}
            >
              {availableInfo}
            </Typography>

            <Typography component="div" sx={{ mb: '24px' }}>
              <TurnHtmlStringToTag string={descricao?.html} />
              <br />
              ISBN: {isbn}
            </Typography>
          </div>
        </StyledPaper>
      </Container>
    </>
  )
}

export default Livro
