const GET_TEXTOS = /* GraphQL */ `
  query GET_TEXTOS {
    textos {
      autores
      linkOriginal
      subtitulo
      titulo
      texto {
        html
      }
      veiculoDeDivulgacao
      createdAt
      capa {
        url
      }
    }
  }
`

export default GET_TEXTOS
