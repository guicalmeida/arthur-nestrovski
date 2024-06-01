const GET_EVENTOS = /* GraphQL */ `
  query GET_EVENTOS {
    eventos {
      id
      descricao {
        html
      }
      fim
      inicio
      localizacao {
        latitude
        longitude
      }
      titulo
      url
      capa {
        url
      }
    }
  }
`
export default GET_EVENTOS
