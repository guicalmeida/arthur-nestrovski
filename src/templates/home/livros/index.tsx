import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'

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
