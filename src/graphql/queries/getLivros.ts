const GET_LIVROS = /* GraphQL */ `
  query GET_LIVROS {
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
      }
      autor
      ano {
        ano
      }
    }
  }
`

export default GET_LIVROS
