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
import dayjs from 'dayjs'
import logo from '../../public/logo.svg'
import Link from './link'

const StyledCard = styled(Card)`
  width: 345px;
  height: 530px;
  display: flex;
  flex-direction: column;
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 16px 16px 16px;
`
export default function HomeEventCard({ props }: Props) {
  const { title, date, startDate, address, path, cover } = props || {}

  const upComing: boolean = dayjs().isBefore(dayjs(startDate))

  const link = `agenda/${path}` || ''
  return (
    <StyledCard>
      <Link link={`/${link}`} underline={false}>
        <CardMedia
          component="img"
          image={cover ?? logo.src}
          sx={{
            cursor: 'pointer',
            maxHeight: 210,
            width: '100%',
            objectFit: cover ? 'cover' : 'scale-down',
            margin: 'auto',
          }}
        />
      </Link>
      <Typography
        variant="h4"
        component="h2"
        color="primary.dark"
        sx={{ letterSpacing: '2px', pl: '32px' }}
      >
        Eventos
      </Typography>
      <StyledBox>
        {upComing ? (
          <CardContent>
            <div>
              <Link link={`/${link}`} underline={false}>
                <Typography variant="h5" component="h2" color="text.secondary">
                  {title}
                </Typography>
              </Link>
              <Typography
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '18px',
                }}
              >
                {date}
              </Typography>
              {address && (
                <Typography sx={{ fontWeight: 600, mt: '8px' }}>
                  {address}
                  <br />
                </Typography>
              )}
            </div>
          </CardContent>
        ) : (
          <CardContent>
            <Typography>Não há eventos agendados</Typography>
          </CardContent>
        )}
        <CardActions>
          {upComing && (
            <Link link={`/${link}`}>
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
          <Link link={'agenda'}>
            <Button
              size="medium"
              variant="contained"
              endIcon={<ChevronRight />}
            >
              {upComing ? 'Ver todos' : 'Ver anteriores'}
            </Button>
          </Link>{' '}
        </CardActions>
      </StyledBox>
    </StyledCard>
  )
}

interface Props {
  props: {
    title?: string
    date?: string
    startDate?: string
    address?: string
    description?: string
    path?: string
    cover?: string
  }
}
