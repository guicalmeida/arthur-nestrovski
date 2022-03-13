const GET_CDS = /* GraphQL */ `
  query GET_CDS {
    cDs {
      titulo
      linkParaCompra
      linkEmYoutubeMusic
      linkEmTidal
      linkEmSpotify
      linkEmAppleMusic
      linkEmDeezer
      linkEmAmazonMusic
      letra {
        composicao
        copyright
        tituloOriginal
        titulo
        letraOriginal {
          html
        }
        letra {
          html
        }
      }
      faixas
      descricao {
        html
      }
      creditos
      capa {
        url
        width
        height
      }
      ano {
        ano
      }
    }
  }
`

export default GET_CDS
