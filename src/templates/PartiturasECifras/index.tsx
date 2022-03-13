import DividedView from 'components/dividedView'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { partiturasECifrasProps } from 'types/api'

export default function PartiturasECifrasPage({
  partiturasECifras,
}: partiturasECifrasProps) {
  const bc = {
    Música: 'musica',
    'Partituras e Cifras': 'partituras-e-cifras',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>PARTITURAS E CIFRAS</NavHeader>
      <div>
        <DividedView partiturasECifras={partiturasECifras} />
      </div>
    </>
  )
}