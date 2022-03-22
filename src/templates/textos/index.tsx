import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { TextosProps } from 'types/api'

const TextosPage = ({ textos }: TextosProps) => {
  const bc = {
    Escrita: 'escrita',
    Livros: 'livros',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>TEXTOS</NavHeader>
    </>
  )
}

export default TextosPage
