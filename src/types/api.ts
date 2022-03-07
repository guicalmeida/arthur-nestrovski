export interface LivrosProps {
  livros: {
    titulo: string
    subtitulo: string
    linkParaCompra: string
    isbn: string
    ilustracoes: string
    editora: {
      titulo: string
    }
    descricao: {
      html: string
    }
    cidade: {
      titulo: string
    }
    categoriaLivro: {
      titulo: string
    }
    capa: {
      url: string
    }
    autor: string
    ano: {
      ano: number
    }
  }
}
