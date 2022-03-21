const GET_CDS = /* GraphQL */ `
  query GET_CDS(orderBy: createdAt_DESC) {
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
