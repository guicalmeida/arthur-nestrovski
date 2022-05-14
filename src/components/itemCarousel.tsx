/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from '@mui/material'
import { LivroProps } from 'types/api'
import Link from 'components/link'
import universalSlugify from 'services/slugifyHelper'
import { CSSProperties } from 'react'
import { styled } from '@mui/system'
import ItemSlider from './slider'

const StyledContainer = styled(Container)`
  margin: 16px 0;
  height: 540px;
  max-width: 100vw !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const StyledBox = styled(Box)`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const Overlay = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  backdrop-filter: blur(3px);
  background-color: #52525294;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
`

const ImageContainer = styled('div')`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`

export default function ItemCarousel({ parentRoute, itens, titulo }: Props) {
  return (
    <>
      <StyledContainer sx={{ backgroundColor: 'background.paper' }}>
        <Typography
          sx={{
            letterSpacing: '5px',
            textTransform: 'uppercase',
            marginRight: 'auto',
          }}
          variant="h4"
          component="h2"
          color="text.secondary"
        >
          {titulo}
        </Typography>
        <StyledBox>
          <ItemSlider initialSlides={4}>
            {itens.map((item) => {
              const { capa, ano, titulo, editora } = item || {}
              let bookHoverStyle: CSSProperties = {
                objectFit: 'contain',
                height: '280px',
                width: 'auto',
              }

              const width = capa?.width || 0
              const height = capa?.height || 0

              if (width > height) {
                bookHoverStyle = {
                  objectFit: 'contain',
                  height: 'auto',
                  width: '280px',
                }
              }
              const slug = universalSlugify(titulo)
              return (
                <Box key={slug}>
                  <Link
                    style={{ width: 'fit-content', margin: 'auto' }}
                    link={parentRoute ? `/${parentRoute}/${slug}` : `/${slug}`}
                  >
                    <ImageContainer>
                      <img
                        src={capa?.url}
                        alt={'capa de ' + titulo}
                        style={bookHoverStyle}
                      />
                      <Overlay>
                        <div
                          style={{
                            width: '75%',
                            margin: '0 auto',
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: '600',
                              fontSize: '20px',
                              color: 'primary.light',
                            }}
                          >
                            {titulo}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: '500',
                              fontSize: '15px',
                              color: 'white',
                            }}
                          >
                            {editora?.titulo} · {ano?.ano}
                          </Typography>
                        </div>
                      </Overlay>
                    </ImageContainer>
                  </Link>
                </Box>
              )
            })}
          </ItemSlider>
        </StyledBox>
      </StyledContainer>
    </>
  )
}

interface Props {
  titulo: string
  itens: LivroProps[]
  parentRoute?: string
}
