import { Grid, Typography } from '@mui/material'
import ItemCard from 'components/itemCard'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { getShortDescription } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { DVDsProps } from 'types/api'

const DVDsPage = ({ dvds }: DVDsProps) => {
  const bc = {
    Música: 'musica',
    DVDs: 'dvds',
  }

  const sortedItems = dvds?.sort((a, b) => {
    return a?.ano?.ano > b?.ano?.ano ? -1 : 1
  })

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>DVDs</NavHeader>
      <Grid
        container
        justifyContent="center"
        sx={{ maxWidth: '1200px', margin: '0 auto', mb: '100px' }}
      >
        {sortedItems?.map((item) => {
          const shortDesc = getShortDescription(item?.descricao?.html)
          const slug = universalSlugify(item?.titulo)
          const url = `/${Object.values(bc).join('/')}/${slug}`

          return (
            <Grid item key={slug}>
              <ItemCard imageUrl={item.capa.url} url={url}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="text.secondary"
                >
                  {item?.titulo}
                </Typography>
                <Typography variant="body2">{shortDesc}</Typography>
              </ItemCard>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default DVDsPage
