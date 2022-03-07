/* eslint-disable @next/next/no-img-element */
import { Box, Container, Fade, Typography } from '@mui/material'
import { LivroProps } from 'types/api'
import Slider from 'react-slick'

import Link from 'components/link'
import universalSlugify from 'services/slugifyHelper'
import { CSSProperties, useState } from 'react'

export default function ItemCarousel({ itens, titulo }: Props) {
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

  let initialHoverState = {} as HoverProps
  itens.forEach((item) => {
    const slug = universalSlugify(item.titulo)
    initialHoverState = {
      ...initialHoverState,
      [slug]: false,
    }
  })
  const [hover, setHover] = useState(initialHoverState)

  return (
    <>
      <Container
        sx={{
          margin: '15px 0',
          height: '540px',
          maxWidth: '100vw !important',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'background.paper',
        }}
      >
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
        <Box
          sx={{
            width: '90%',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <Slider {...settings}>
            {itens.map((item) => {
              let bookHoverStyle: CSSProperties = {
                objectFit: 'contain',
                height: '280px',
                width: 'auto',
              }
              if (item.capa.width > item.capa.height) {
                bookHoverStyle = {
                  objectFit: 'contain',
                  height: 'auto',
                  width: '280px',
                }
              }
              const slug = universalSlugify(item?.titulo)
              return (
                <Box key={slug}>
                  {/* TODO: LINK */}
                  <Link link={'/'}>
                    <div
                      style={{
                        position: 'relative',
                        height: 'fit-content',
                        width: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin: 'auto',
                      }}
                      onMouseEnter={() => {
                        setHover({
                          ...hover,
                          [slug]: true,
                        })
                      }}
                      onMouseLeave={() => {
                        setHover({
                          ...hover,
                          [slug]: false,
                        })
                      }}
                    >
                      <img
                        src={item?.capa?.url}
                        alt={'capa de ' + item?.titulo}
                        style={{ ...bookHoverStyle }}
                      />
                      <Fade
                        in={hover[slug]}
                        {...(hover ? { timeout: 400 } : {})}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            backdropFilter: 'blur(3px)',
                            backgroundColor: '#52525294',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}
                        >
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
                              {item.titulo}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: '500',
                                fontSize: '15px',
                                color: 'white',
                              }}
                            >
                              {item.editora.titulo} · {item.ano.ano}
                            </Typography>
                          </div>
                        </div>
                      </Fade>
                    </div>
                  </Link>
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Container>
    </>
  )
}

interface Props {
  titulo: string
  itens: LivroProps[]
}

interface HoverProps {
  [index: string]: boolean
}
