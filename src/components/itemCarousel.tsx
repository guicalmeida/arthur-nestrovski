import { Box, Container, Fade, Typography, Zoom } from '@mui/material'
import { LivroProps } from 'types/api'
import Slider from 'react-slick'

import Image from 'next/image'
import slugify from 'slugify'
import GraphCMSImageLoader from 'graphql/graphCMSImageLoader'
import Link from 'components/link'
import { useState } from 'react'

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

  let initialHoverState = {} as HoverProps
  itens.forEach((item) => {
    const slug = slugify(item.titulo)
    initialHoverState = {
      ...initialHoverState,
      [slug]: false,
    }
  })
  const [hover, setHover] = useState(initialHoverState)

  const imageStyle = {
    width: 'fit-content',
    height: 'fit-content',
    position: 'relative',
  }

  const hoveredImageStyle = {
    ...imageStyle,
    filter: 'blur(2px)',
  }

  return (
    <>
      <Container
        sx={{
          margin: '15px 0',
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
              const slug = slugify(item?.titulo)
              return (
                <Box key={slug}>
                  {/* TODO: LINK */}
                  <Link link={'/'}>
                    <div
                      style={imageStyle}
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
                      <Image
                        loader={GraphCMSImageLoader}
                        src={item?.capa?.url}
                        alt={'capa de ' + item?.titulo}
                        objectFit={'contain'}
                        width={200}
                        height={400}
                      />
                      <Fade in={hover[slug]}>
                        <div
                          style={{
                            width: 'calc(100% + 10px)',
                            height: '101%',
                            position: 'absolute',
                            top: 0,
                            left: '-5px',
                            backdropFilter: 'blur(3px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        ></div>
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
