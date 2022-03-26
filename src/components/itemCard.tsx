import { Box, Button, Card, CardContent, CardMedia } from '@mui/material'
import { styled } from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Link from 'next/link'
import { ReactNode } from 'react'
import logo from '../../public/logo.svg'

const StyledCard = styled(Card)`
  transition: all 0.2s ease-in-out;
  max-width: 320px;
  margin: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
`

const HoverOverlay = styled(Box)`
  transition: all 0.2s ease-in-out;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: #00000058;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 1;
    cursor: pointer;

    & + img {
      transition: all 0.2s ease-in-out;
      filter: blur(3px) grayscale(40%);
    }
  }
`

export default function ItemCard({ children, url, imageUrl }: Props) {
  return (
    <StyledCard>
      <Link href={url} passHref>
        <a>
          <div style={{ position: 'relative' }}>
            <HoverOverlay>
              <Button
                variant="contained"
                size="large"
                endIcon={<ChevronRightIcon />}
              >
                Ver
              </Button>
            </HoverOverlay>
            <CardMedia
              component="img"
              image={imageUrl ?? logo.src}
              className="cardImage"
              sx={imageUrl ? {} : { p: '24px', width: '65%', margin: 'auto' }}
            />
          </div>
        </a>
      </Link>
      <div>
        <CardContent>{children}</CardContent>
      </div>
    </StyledCard>
  )
}

interface Props {
  children: ReactNode
  url: string
  imageUrl: string
}
