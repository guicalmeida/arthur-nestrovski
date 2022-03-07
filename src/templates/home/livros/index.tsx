import ItemCarousel from 'components/itemCarousel/itemCarousel'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { LivrosProps } from 'types/api'

const LivrosPage = ({ livros, categoriasLivro }: LivrosProps) => {
  const bc = {
    Livros: 'livros',
  }
  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>Livros</NavHeader>
      <ItemCarousel categoriasLivro={categoriasLivro} livros={livros} />
    </>
  )
}

export default LivrosPage
