const GET_LIVROS = /* GraphQL */ `
  query GET_LIVROS(orderBy: createdAt_DESC) {
    livros {
      titulo
      subtitulo
      linkParaCompra
      isbn
      ilustracoes
      editora {
        titulo
      }
      descricao {
        html
      }
      cidade {
        titulo
      }
      categoriaLivro {
        titulo
      }
      capa {
        url
        width
        height
      }
      autor
      ano {
        ano
      }
    }
    categoriasLivro {
      titulo
    }
  }
`

export default GET_LIVROS
