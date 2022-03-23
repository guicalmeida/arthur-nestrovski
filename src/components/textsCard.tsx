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
import { ReactNode } from 'react'
import { formatIsoString } from 'services/datesHelper'
import logo from '../../public/logo.svg'

const StyledCard = styled(Card)`
  max-width: 345px;

  @media (min-width: 601px) {
    display: flex;
    max-width: 1200px;
    width: 80vw;
    min-height: 280px;
    min-height: 350px;

    > img {
      width: 45%;
    }
  }
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 8px 8px 8px;
`

export default function TextsCard({ children, text, path }: Props) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={text?.imageUrl ?? logo.src}
        sx={{
          maxHeight: 350,
          width: [200, 350],
          objectFit: 'scale-down',
          margin: 'auto',
        }}
      />
      <StyledBox>
        <CardContent>
          <Typography variant="h4" component="h2" color="text.secondary">
            {text?.title}
          </Typography>
          <Typography sx={{ fontWeight: 500 }}>{text?.subtitle}</Typography>
          <Typography sx={{ color: 'primary.main' }}>
            {text?.date ? formatIsoString(text?.date) : ''}
          </Typography>
          <br />
          <Typography>{children}</Typography>
        </CardContent>
        <CardActions>
          <Link href={path} passHref>
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
    content?: string
  }
  path: string
}
