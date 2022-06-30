import Typography from '@mui/material/Typography'
import { Container, Divider, Grid } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'
import CustomBreadcrumbs from './customBreadcrumbs'

//no objeto de breadcrumbs, a chave é a label e o valor o caminho para o router
//além disso, as breadcrumbs serão mostradas na ordem do objeto, do 1º ao último
export default function NavHeader({
  children,
  technicalInfo,
  titleStyle,
  breadcrumbs,
  isSearch,
}: Props) {
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
        sx={{
          height: '100%',
          marginTop: '16px',
          textAlign: 'center',
        }}
      >
        <Grid
          container
          sx={{ height: '100%' }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {breadcrumbs && (
            <Grid item>
              <CustomBreadcrumbs breadcrumbs={breadcrumbs}></CustomBreadcrumbs>
            </Grid>
          )}
          <Grid item>
            <Typography
              sx={{
                ...titleStyle,
                fontWeight: 400,
                letterSpacing: '5px',
                marginTop: '10px',
                fontSize: isSearch ? '42px' : '60px',
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
  breadcrumbs?: {
    [index: string]: string
  }
  technicalInfo?: {
    production?: string
    year?: number | string
  }
  titleStyle?: CSSProperties
  isSearch?: boolean
}
