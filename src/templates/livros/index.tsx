import ItemCarousel from 'components/itemCarousel'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import universalSlugify from 'services/slugifyHelper'
import { LivroProps, LivrosProps } from 'types/api'

const LivrosPage = ({ livros, categoriasLivro }: LivrosProps) => {
  const bc = {
    Escrita: 'escrita',
    Livros: 'livros',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>LIVROS</NavHeader>
      {categoriasLivro?.map((categoria) => {
        const thisGenreBooks: LivroProps[] = []
        livros.map((livro) => {
          if (livro?.categoriaLivro?.titulo === categoria?.titulo) {
            thisGenreBooks.push(livro)
          }
        })
        return (
          <ItemCarousel
            key={universalSlugify(categoria.titulo)}
            itens={thisGenreBooks}
            titulo={categoria.titulo}
            parentRoute={'livros'}
          />
        )
      })}
    </>
  )
}

export default LivrosPage
