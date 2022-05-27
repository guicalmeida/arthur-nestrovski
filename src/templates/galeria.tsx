/* eslint-disable @next/next/no-img-element */
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { GaleriasProps } from 'types/api'
import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material'
import universalSlugify from 'services/slugifyHelper'
import dayjs from 'dayjs'
import { styled } from '@mui/system'
import useWindowSize from 'hooks/useWindowResize'
import { ChevronRight } from '@mui/icons-material'

const HoverableImage = styled(ImageListItem)`
  position: relative;
  transition: all 0.2s ease-in-out;

  & > div.info {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(0deg, #000000c1 18%, rgba(0, 0, 0, 0) 90%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    opacity: 0;
    transition: all 0.25s ease-in-out;
    text-align: center;
    padding: 8px;
  }

  & > div.info:hover,
  div.info:active {
    opacity: 1;
    transition: all 0.25s ease-in-out;
  }
`

export default function GaleriaPage({ galerias }: GaleriasProps) {
  const bc = {
    Galeria: 'galeria',
  }

  const sorted = galerias.sort((a, b) => {
    return dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1
  })

  const { width } = useWindowSize()

  let cols = 1

  if ((width || 0) > 650 && (width || 0) <= 1050) {
    cols = 2
  } else if ((width || 0) <= 650) {
    cols = 1
  } else {
    cols = 3
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>GALERIA</NavHeader>
      <Container style={{ marginBottom: '100px' }}>
        <ImageList
          variant="masonry"
          cols={cols}
          gap={16}
          sx={{ margin: '24px' }}
        >
          {sorted.map((foto) => {
            if (foto.foto?.url) {
              const slug = universalSlugify(foto.foto?.url.slice(27))
              return (
                <HoverableImage key={slug}>
                  {(foto.titulo || foto.descricao) && (
                    <div className="info">
                      {foto.titulo && (
                        <Typography
                          sx={{ color: 'primary.main' }}
                          component="h2"
                          variant="h6"
                        >
                          {foto.titulo}
                        </Typography>
                      )}
                      {foto.descricao && (
                        <Typography
                          sx={{ color: 'primary.light', fontSize: '12px' }}
                        >
                          {foto.descricao}
                        </Typography>
                      )}
                      <a href={`${foto.foto?.url}`} target="__blank">
                        <Button
                          size="small"
                          variant="outlined"
                          endIcon={<ChevronRight />}
                          sx={{ mt: '12px' }}
                        >
                          Tamanho real
                        </Button>
                      </a>
                    </div>
                  )}
                  <img
                    src={`${foto.foto?.url}`}
                    alt={foto?.titulo}
                    loading="lazy"
                  />
                </HoverableImage>
              )
            }
          })}
        </ImageList>
      </Container>
    </>
  )
}
