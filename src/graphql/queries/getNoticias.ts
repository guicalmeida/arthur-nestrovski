const GET_NOTICIAS = /* GraphQL */ `
  query GET_NOTICIAS {
    noticias {
      titulo
      subtitulo
      createdAt
      texto {
        html
      }
      capa {
        url
      }
    }
  }
`

export default GET_NOTICIAS
