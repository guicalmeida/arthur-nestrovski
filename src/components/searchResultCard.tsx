import { ChevronRight } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'
import { getShortDescription } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import logo from '../../public/logo.svg'

const StyledCard = styled(Card)`
  max-width: 345px;

  @media (min-width: 601px) {
    display: flex;
    max-width: 800px;
    width: 80vw;
    min-height: 280px;
    max-height: 350px;
  }
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 8px 8px 8px;
`

export default function SearchResultCard({ result }: Props) {
  const { titulo, mediaType, descricao, capa, ano, letra, texto } = result || {}
  const hasQParam = ['letras', 'partiturasECifras'].includes(mediaType)
  const slug = universalSlugify(titulo)
  const description = getShortDescription(
    descricao?.html ?? letra?.html ?? texto?.html
  )

  const mediaTypeTitle = Object.entries(mediaNameFix).find(
    (entry) => entry[0] === mediaType
  )?.[1]

  const path = Object.entries(pathFix).find(
    (entry) => entry[0] === mediaType
  )?.[1]

  let link = ''

  if (hasQParam) {
    link = `/${path}?selecionado=${slug}`
  } else if (mediaType === 'videos') {
    link = `/${path}`
  }

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={capa?.url ?? logo.src}
        sx={
          capa?.url
            ? { height: '350px', width: '260px', objectFit: 'cover' }
            : { p: '24px', width: '260px' }
        }
      />
      <StyledBox>
        <CardContent>
          <Typography gutterBottom color="text.secondary">
            {mediaTypeTitle}
            {ano?.ano ? ' · ' + ano?.ano : ''}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            color="text.secondary"
          >
            {titulo}
          </Typography>
          <Typography component="div">{description}</Typography>
        </CardContent>
        <CardActions>
          <Link href={link} passHref>
            <Button
              size="medium"
              variant="outlined"
              endIcon={<ChevronRight />}
              sx={{ mr: 2 }}
            >
              Ver
            </Button>
          </Link>
        </CardActions>
      </StyledBox>
    </StyledCard>
  )
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result: any
}

const mediaNameFix = {
  cDs: 'CDs',
  eventos: 'Eventos',
  letras: 'Letras',
  livros: 'Livros',
  noticias: 'Notícias',
  partiturasECifras: 'Partituras e Cifras',
  textos: 'Textos',
  videos: 'Vídeos',
  perfil: 'Perfil',
  dvds: 'DVDs',
  shows: 'Shows',
}

const pathFix = {
  cDs: 'musica/cds',
  eventos: 'agenda',
  letras: 'musica/letras',
  livros: 'escrita/livros',
  noticias: 'noticias',
  partiturasECifras: 'musica/partituras-e-cifras',
  textos: 'escrita/textos',
  videos: 'videos',
  perfil: 'perfil',
  dvds: 'musica/dvds',
  shows: 'shows',
}
