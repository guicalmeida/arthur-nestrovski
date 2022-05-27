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

  let hideView = false
  if (typeof window !== 'undefined') {
    hideView = window.innerWidth <= 1000
  }

  return (
    <>
      <NavDrawer />
      <NavHeader
        breadcrumbs={bc}
        titleStyle={hideView ? { fontSize: '3rem' } : {}}
      >
        PARTITURAS E CIFRAS
      </NavHeader>
      <div>
        <DividedView partiturasECifras={partiturasECifras} />
      </div>
    </>
  )
}
