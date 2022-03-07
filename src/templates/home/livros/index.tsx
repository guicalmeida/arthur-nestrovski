import ItemCarousel from 'components/itemCarousel'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import slugify from 'slugify'
import { LivroProps, LivrosProps } from 'types/api'

const LivrosPage = ({ livros, categoriasLivro }: LivrosProps) => {
  const bc = {
    Livros: 'livros',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>Livros</NavHeader>
      {categoriasLivro.map((categoria) => {
        const thisGenreBooks: LivroProps[] = []
        livros.map((livro) => {
          if (livro?.categoriaLivro?.titulo === categoria?.titulo) {
            thisGenreBooks.push(livro)
          }
        })
        return (
          <ItemCarousel
            key={slugify(categoria.titulo)}
            itens={thisGenreBooks}
            titulo={categoria.titulo}
          />
        )
      })}
    </>
  )
}

export default LivrosPage
