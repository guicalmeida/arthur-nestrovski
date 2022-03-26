const GET_GALERIA = /* GraphQL */ `
  query GET_GALERIA {
    galerias {
      descricao
      titulo
      foto {
        url
        createdAt
      }
    }
  }
`

export default GET_GALERIA
