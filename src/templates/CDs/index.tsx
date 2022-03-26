import { Grid, Typography } from '@mui/material'
import CDsActionItems from 'components/CDActionItems'
import ItemCard from 'components/itemCard'
import Link from 'components/link'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { getShortDescription } from 'services/shortDescriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { CDsProps } from 'types/api'

const CDsPage = ({ cDs }: CDsProps) => {
  const bc = {
    Música: 'musica',
    CDs: 'cds',
  }

  const sortedItems = cDs?.sort((a, b) => {
    return a?.ano?.ano > b?.ano?.ano ? -1 : 1
  })

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>CDs</NavHeader>
      <Grid
        container
        justifyContent="center"
        sx={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {sortedItems?.map((item) => {
          const shortDesc = getShortDescription(item?.descricao?.html)
          const slug = universalSlugify(item?.titulo)
          const url = `/${Object.values(bc).join('/')}/${slug}`

          return (
            <Grid item key={slug}>
              <ItemCard imageUrl={item.capa.url} url={url}>
                <Link underline={false} link={url}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="text.secondary"
                  >
                    {item?.titulo}
                  </Typography>
                </Link>
                <Typography variant="body2">{shortDesc}</Typography>
                <CDsActionItems cD={item} />
              </ItemCard>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default CDsPage
