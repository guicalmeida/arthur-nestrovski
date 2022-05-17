import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import universalSlugify from 'services/slugifyHelper'
import { CDUnitProps } from 'types/api'

const CD = ({ cD }: CDUnitProps) => {
  const slug = universalSlugify(cD?.titulo)

  const bc = {
    Música: 'musica',
    CDs: 'cds',
    [cD?.titulo]: slug,
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>{cD?.titulo.toUpperCase()}</NavHeader>
    </>
  )
}

export default CD
