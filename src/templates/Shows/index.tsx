import { Button, Container, Grid, Typography } from '@mui/material'
import ItemCard from 'components/itemCard'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import dayjs from 'dayjs'
import { getShortDescription } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { ShowsProps } from 'types/api'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Link from 'components/link'

export default function ShowsPage({ shows }: ShowsProps) {
  const bc = {
    Shows: 'shows',
  }

  const sorted = shows.sort((a, b) =>
    dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? 1 : -1
  )
  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>SHOWS</NavHeader>
      <Container sx={{ mb: '100px' }}>
        <Grid container justifyContent="center">
          {sorted.map((show) => {
            const shortDesc = getShortDescription(show?.descricao?.html)
            const slug = universalSlugify(show?.titulo)
            const url = `/${Object.values(bc).join('/')}/${slug}`

            return (
              <Grid item key={slug}>
                <ItemCard imageUrl={show?.fotos[0]?.url} url={url}>
                  <Typography
                    variant="h5"
                    component="h2"
                    color="text.secondary"
                  >
                    {show?.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: '12px' }}>
                    {show?.artistas}
                  </Typography>
                  {shortDesc && (
                    <Typography variant="body2" sx={{ mb: '12px' }}>
                      {shortDesc}
                    </Typography>
                  )}
                  <Link link={url} underline={false}>
                    <Button
                      variant="outlined"
                      size="medium"
                      endIcon={<ChevronRightIcon />}
                    >
                      detalhes técnicos
                    </Button>
                  </Link>
                </ItemCard>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
