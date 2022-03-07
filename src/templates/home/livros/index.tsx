import NavDrawer from 'components/navDrawer/navDrawer'
import NavHeader from 'components/navHeader/navHeader'

const LivrosPage = () => {
  const bc = {
    Livros: 'livros',
  }
  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>Livros</NavHeader>
    </>
  )
}

export default LivrosPage
