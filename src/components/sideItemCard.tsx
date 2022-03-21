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
import universalSlugify from 'services/slugifyHelper'

const StyledCard = styled(Card)`
  max-width: 345px;

  @media (min-width: 601px) {
    display: flex;
    max-width: 600px;
    width: 80vw;
    min-height: 280px;
    max-height: 350px;

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

export default function SideItemCard({ children, path, latest }: Props) {
  const slug = universalSlugify(latest?.title ?? '')

  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={latest.imageUrl}
        sx={{ height: '350px', width: '350px', objectFit: 'cover' }}
      />
      <StyledBox>
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            color="text.secondary"
          >
            {children}
          </Typography>
          <Typography gutterBottom color="text.primary">
            Mais recente:
          </Typography>

          <Typography>
            <span style={{ fontWeight: 600 }}>{latest?.title}</span>
            {latest?.year ? (
              <span>
                <br />
                {latest?.year}
              </span>
            ) : (
              ''
            )}
            {latest?.publisher ? (
              <span>
                <br />
                {latest?.publisher}
              </span>
            ) : (
              ''
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`${path}/${slug}`} passHref>
            <Button
              size="medium"
              variant="outlined"
              endIcon={<ChevronRight />}
              sx={{ mr: 2 }}
            >
              Ver
            </Button>
          </Link>
          <Link href={path} passHref>
            <Button
              size="medium"
              variant="contained"
              endIcon={<ChevronRight />}
            >
              Ver todos
            </Button>
          </Link>
        </CardActions>
      </StyledBox>
    </StyledCard>
  )
}

interface Props {
  children: ReactNode
  path: string
  latest: {
    imageUrl?: string
    title?: string
    year?: number
    publisher?: string
  }
}
