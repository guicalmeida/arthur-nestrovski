import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Container, Divider, Grid } from '@mui/material'
import Link from '../link'
import { ReactNode } from 'react'

export default function NavHeader({ breadcrumbs, children }: Props) {
  return (
    <>
      <Container sx={{ height: '100%', marginTop: '15px' }}>
        <Grid
          container
          sx={{ height: '100%' }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
              <Link link="/">Página inicial</Link>
              {Object.entries(breadcrumbs).map((item, i, arr) => {
                const isCurrentPage = arr.length - 1 === i
                if (!isCurrentPage) {
                  return <Link link={item[1]}>{item}</Link>
                } else {
                  return <Typography color="text.primary">{item[0]}</Typography>
                }
              })}
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 400,
                letterSpacing: '5px',
                textTransform: 'uppercase',
                marginTop: '10px',
              }}
              variant="h2"
              component="h1"
              color="text.secondary"
            >
              {children}
            </Typography>
          </Grid>
          <Grid item>
            <Divider
              variant="middle"
              sx={{
                width: '280px',
                height: '3px',
                borderTop: '2px solid',
                borderColor: 'primary.main',
                margin: '15px 0',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

interface Props {
  children: ReactNode
  breadcrumbs: {
    [index: string]: string
  }
}
