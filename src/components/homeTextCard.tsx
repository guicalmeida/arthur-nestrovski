import universalSlugify from 'services/slugifyHelper'
import { ChevronRight } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import { ReactNode } from 'react'
import Link from './link'

const StyledCard = styled(Card)`
  max-width: 345px;

  @media (min-width: 1200px) {
    display: flex;
    min-height: 350px;
    min-width: 100%;
  }
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 8px 8px 8px;
`

export default function HomeTextCard({
  children,
  text,
  path,
  calendar = false,
  title,
}: Props) {
  const unitPath = `${path}/${universalSlugify(text.title + '-' + text?.date)}`
  return (
    <StyledCard>
      <StyledBox>
        <CardContent>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              color: 'primary.dark',
              fontWeight: 400,
              letterSpacing: '2px',
              mb: '24px',
            }}
          >
            {title}
          </Typography>

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
          <Link link={unitPath} underline={false}>
            <Button
              size="medium"
              variant="outlined"
              endIcon={<ChevronRight />}
              sx={{ mr: 2 }}
            >
              Ler mais
            </Button>
          </Link>
          <Link link={path}>
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
  text: {
    imageUrl?: string
    title?: string
    date?: string
    subtitle?: string
  }
  path: string
  calendar?: boolean
  title?: string
}
