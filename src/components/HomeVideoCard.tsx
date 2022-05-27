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
import Link from 'next/link'
import { ReactNode } from 'react'

const StyledCard = styled(Card)`
  max-width: 330px;
  max-height: 570px;

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

export default function HomeVideoCard({ children }: Props) {
  return (
    <StyledCard>
      <StyledBox>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            color="primary.dark"
            sx={{ letterSpacing: '2px' }}
          >
            Vídeos
          </Typography>
          <Typography component="div">{children}</Typography>
        </CardContent>
        <CardActions>
          <Link href="videos" passHref>
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
}
