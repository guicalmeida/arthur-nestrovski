const GET_LYRICS = /* GraphQL */ `
  query GET_LYRICS {
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
