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
      letra {
        titulo
      }
      realizacao {
        nome
      }
    }
  }
`

export default GET_CDS
