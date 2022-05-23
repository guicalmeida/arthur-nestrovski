import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Container, Divider, Grid } from '@mui/material'
import Link from './link'
import { ReactNode } from 'react'

//no objeto de breadcrumbs, a chave é a label e o valor o caminho para o router
//além disso, as breadcrumbs serão mostradas na ordem do objeto, do 1º ao último
export default function NavHeader({
  breadcrumbs,
  children,
  technicalInfo,
}: Props) {
  let wholeLink = ''

  const { production, year } = technicalInfo || {}

  const techText = () => {
    if (production && year) {
      return `${production} · ${year}`
    } else if (production) {
      return `${production}`
    } else if (year) {
      return `${year}`
    }
  }

  return (
    <>
      <Container
        sx={{ height: '100%', marginTop: '15px', textAlign: 'center' }}
      >
        <Grid
          container
          sx={{ height: '100%' }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Breadcrumbs aria-label="breadcrumb">
              <Link link="/" underline={true}>
                Página inicial
              </Link>
              {Object.entries(breadcrumbs).map((item, i, arr) => {
                const isCurrentPage = arr.length - 1 === i
                wholeLink = wholeLink + `/${item[1]}`

                if (!isCurrentPage) {
                  return (
                    <Link underline={true} link={wholeLink} key={wholeLink}>
                      {item[0]}
                    </Link>
                  )
                } else {
                  return (
                    <Typography color="text.primary" key={wholeLink}>
                      {item[0]}
                    </Typography>
                  )
                }
              })}
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 400,
                letterSpacing: '5px',
                marginTop: '10px',
              }}
              variant="h2"
              component="h1"
              color="text.secondary"
            >
              {children}
            </Typography>
          </Grid>
          {technicalInfo && (
            <Grid item>
              <Typography>{techText()}</Typography>
            </Grid>
          )}
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
  technicalInfo?: {
    production?: string
    year?: number
  }
}
