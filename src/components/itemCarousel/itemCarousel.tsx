import { Box, Container, Typography } from '@mui/material'
import { LivrosProps } from 'types/api'
import Slider from 'react-slick'

import Image from 'next/image'
import slugify from 'slugify'
import GraphCMSImageLoader from 'graphql/graphCMSImageLoader'

export default function ItemCarousel({ livros, categoriasLivro }: LivrosProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      {categoriasLivro.map((categoria) => {
        return (
          <Container
            key={slugify(categoria?.titulo)}
            sx={{
              marginTop: '15px',
              height: '540px',
              maxWidth: '100vw !important',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'background.paper',
            }}
          >
            <Typography
              sx={{
                letterSpacing: '5px',
                textTransform: 'uppercase',
                paddingTop: '25px',
                marginRight: 'auto',
              }}
              variant="h4"
              component="h2"
              color="text.secondary"
            >
              {categoria?.titulo}
            </Typography>
            <Box
              sx={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <Slider {...settings}>
                {livros.map((livro) => {
                  if (livro?.categoriaLivro?.titulo === categoria?.titulo) {
                    return (
                      <Box key={slugify(livro?.titulo)}>
                        <Image
                          loader={GraphCMSImageLoader}
                          src={livro?.capa?.url}
                          alt={'capa do livro ' + livro?.titulo}
                          objectFit={'contain'}
                          width={200}
                          height={400}
                        />
                      </Box>
                    )
                  }
                })}
              </Slider>
            </Box>
          </Container>
        )
      })}
    </>
  )
}
