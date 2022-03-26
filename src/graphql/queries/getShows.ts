const GET_SHOWS = /* GraphQL */ `
  query GET_SHOWS {
    shows {
      artistas
      createdAt
      descricao {
        html
      }
      fotos {
        url
      }
      mapaDoPalco {
        url
      }
      necessidadesTecnicas {
        html
      }
      repertorio {
        html
      }
      sobreOsArtistas {
        html
      }
      tipo
      titulo
    }
  }
`

export default GET_SHOWS
