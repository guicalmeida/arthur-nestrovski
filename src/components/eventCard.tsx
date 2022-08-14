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
import logo from '../../public/logo.svg'
import Link from './link'

const StyledCard = styled(Card)`
  width: 330px;
  margin: 4px auto;
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
export default function EventCard({ props }: Props) {
  const { title, date, address, path, cover } = props || {}
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
      <StyledBox>
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
        <CardActions>
          <Link link={`/${link}`} underline={false}>
            <Button size="large" variant="contained" endIcon={<ChevronRight />}>
              Ver detalhes
            </Button>
          </Link>
        </CardActions>
      </StyledBox>
    </StyledCard>
  )
}

interface Props {
  props: {
    title?: string
    date?: string
    address?: string
    description?: string
    path?: string
    cover?: string
  }
}
