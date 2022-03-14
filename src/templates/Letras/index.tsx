import DividedView from 'components/dividedView'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { LetrasProps } from 'types/api'

export default function LetrasPage({ letras }: LetrasProps) {
  const bc = {
    Música: 'musica',
    Letras: 'letras',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>LETRAS</NavHeader>
      <div>
        <DividedView partiturasECifras={partiturasECifras} />
      </div>
    </>
  )
}
