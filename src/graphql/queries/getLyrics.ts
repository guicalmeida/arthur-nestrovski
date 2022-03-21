const GET_LYRICS = /* GraphQL */ `
  query GET_LYRICS(orderBy: createdAt_DESC) {
    letras {
      composicao
      copyright
      letra {
        html
      }
      letraOriginal {
        html
      }
      titulo
      tituloOriginal
      ano {
        ano
      }
    }
  }
`

export default GET_LYRICS
