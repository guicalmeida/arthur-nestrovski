/* eslint-disable @next/next/no-img-element */
import { Box, Container, Typography } from '@mui/material'
import { LivroProps } from 'types/api'
import Slider from 'react-slick'

import Link from 'components/link'
import universalSlugify from 'services/slugifyHelper'
import { CSSProperties } from 'react'
import { styled } from '@mui/system'

const StyledContainer = styled(Container)`
  margin: 15px 0;
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1065,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

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
          <Slider {...settings}>
            {itens.map((item) => {
              let bookHoverStyle: CSSProperties = {
                objectFit: 'contain',
                height: '280px',
                width: 'auto',
              }
              if (item?.capa?.width > item?.capa?.height) {
                bookHoverStyle = {
                  objectFit: 'contain',
                  height: 'auto',
                  width: '280px',
                }
              }
              const slug = universalSlugify(item?.titulo)
              return (
                <Box key={slug}>
                  <Link
                    style={{ width: 'fit-content', margin: 'auto' }}
                    link={parentRoute ? `/${parentRoute}/${slug}` : `/${slug}`}
                  >
                    <ImageContainer>
                      <img
                        src={item?.capa?.url}
                        alt={'capa de ' + item?.titulo}
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
                            {item?.titulo}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: '500',
                              fontSize: '15px',
                              color: 'white',
                            }}
                          >
                            {item?.editora?.titulo} · {item?.ano?.ano}
                          </Typography>
                        </div>
                      </Overlay>
                    </ImageContainer>
                  </Link>
                </Box>
              )
            })}
          </Slider>
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
