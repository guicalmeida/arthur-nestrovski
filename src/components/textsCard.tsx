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
import { ReactNode } from 'react'
import logo from '../../public/logo.svg'
import Link from './link'

const StyledCard = styled(Card)`
  max-width: 345px;

  @media (min-width: 750px) {
    display: flex;
    max-width: 1200px;
    width: 80vw;
    min-height: 280px;
    min-height: 350px;

    > img {
      width: 45%;
      max-width: 350px;
    }
  }
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 8px 8px 8px;
`

export default function TextsCard({
  children,
  text,
  path,
  calendar = false,
}: Props) {
  return (
    <StyledCard>
      <Link link={path} underline={false}>
        <CardMedia
          component="img"
          image={text?.imageUrl ?? logo.src}
          sx={{
            cursor: 'pointer',
            maxHeight: 350,
            width: [200, 350],
            objectFit: 'scale-down',
            margin: 'auto',
          }}
        />
      </Link>
      <StyledBox>
        <CardContent>
          <div style={{ cursor: 'pointer' }}>
            <Link link={path} underline={false}>
              <Typography variant="h4" component="h2" color="text.secondary">
                {text?.title}
              </Typography>
            </Link>
            <Link link={path} underline={false}>
              <Typography sx={{ fontWeight: 500 }}>{text?.subtitle}</Typography>
            </Link>
            <Link link={path} underline={false}>
              <Typography
                sx={
                  calendar
                    ? {
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: '18px',
                      }
                    : { color: 'primary.main' }
                }
              >
                {text?.date}
              </Typography>
            </Link>
          </div>
          <br />
          <Typography>{children}</Typography>
        </CardContent>
        <CardActions>
          <Link link={path} underline={false}>
            <Button
              size="medium"
              sx={{ width: '150px' }}
              variant="contained"
              endIcon={<ChevronRight />}
            >
              Ler mais
            </Button>
          </Link>
        </CardActions>
      </StyledBox>
    </StyledCard>
  )
}

interface Props {
  children: ReactNode
  text: {
    imageUrl?: string
    title?: string
    date?: string
    subtitle?: string
  }
  path: string
  calendar?: boolean
}
