import ItemCard from 'components/itemCard'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { DVDsProps } from 'types/api'

const DVDsPage = ({ dvds }: DVDsProps) => {
  const bc = {
    Música: 'musica',
    DVDs: 'dvds',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>DVDs</NavHeader>
      <div>
        <ItemCard dvds={dvds} breadcrumbs={bc} />
      </div>
    </>
  )
}

export default DVDsPage
