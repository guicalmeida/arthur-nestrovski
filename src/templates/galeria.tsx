import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { GaleriasProps } from 'types/api'

export default function GaleriaPage({ galerias }: GaleriasProps) {
  const bc = {
    Galeria: 'galeria',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>GALERIA</NavHeader>
    </>
  )
}
