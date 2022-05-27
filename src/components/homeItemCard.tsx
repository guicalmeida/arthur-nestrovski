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
  display: flex;
  flex-direction: column;
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  margin: 0 8px 8px 8px;
`

export default function HomeItemCard({
  children,
  path,
  imageUrl,
  title,
  latestTitle,
}: Props) {
  const slug = universalSlugify(latestTitle)
  return (
    <StyledCard>
      <CardMedia
        component="img"
        image={imageUrl ?? logo.src}
        sx={
          imageUrl
            ? { height: '300px', width: '345px', objectFit: 'cover' }
            : { p: '24px', width: '350px', margin: 'auto' }
        }
      />
      <StyledBox>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            color="primary.dark"
            sx={{ letterSpacing: '2px' }}
          >
            {title}
          </Typography>
          <Typography component="div">{children}</Typography>
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
  latestTitle?: string
}
