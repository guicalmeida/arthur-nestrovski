import ItemCard from 'components/itemCard'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { CDsProps } from 'types/api'

const CDsPage = ({ cDs }: CDsProps) => {
  const bc = {
    Música: 'musica',
    CDs: 'cds',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>CDs</NavHeader>
      <div>
        <ItemCard cDs={cDs} parentRoute="musica" />
      </div>
    </>
  )
}

export default CDsPage
