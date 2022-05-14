import { ReactNode } from 'react'
import Slider from 'react-slick'

export default function ItemSlider({ children, initialSlides }: Props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: initialSlides,
    slidesToScroll: initialSlides - 1 <= 0 ? 1 : initialSlides - 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return <Slider {...settings}>{children}</Slider>
}

interface Props {
  children: ReactNode
  initialSlides: number
}
