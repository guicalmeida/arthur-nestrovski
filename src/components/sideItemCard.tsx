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
import logo from '../../public/logo.svg'

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

export default function SideItemCard({
  children,
  path,
  imageUrl,
  title,
  showLatest = true,
  latestTitle,
  hasQParam = false,
}: Props) {
  const slug = universalSlugify(latestTitle)
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={imageUrl ?? logo.src}
        sx={
          imageUrl
            ? { height: '350px', width: '350px', objectFit: 'cover' }
            : { p: '24px', width: '350px', margin: 'auto' }
        }
      />
      <StyledBox>
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            color="text.secondary"
          >
            {title}
          </Typography>
          <Typography component="div">{children}</Typography>
        </CardContent>
        <CardActions>
          {showLatest && (
            <Link
              href={
                hasQParam ? `${path}?selecionado=${slug}` : `${path}/${slug}`
              }
              passHref
            >
              <Button
                size="medium"
                variant="outlined"
                endIcon={<ChevronRight />}
                sx={{ mr: 2 }}
              >
                Ver
              </Button>
            </Link>
          )}
          <Link href={path} passHref>
            <Button
              size="medium"
              variant="contained"
              endIcon={<ChevronRight />}
            >
              Ver tudo
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
  imageUrl?: string
  title?: string
  showLatest?: boolean
  latestTitle?: string
  hasQParam?: boolean
}
