const GET_DVDS = /* GraphQL */ `
  query GET_DVDS {
    dvds {
      artistas
      capa {
        url
        width
        height
      }
      descricao {
        html
      }
      informacoesExtra
      linkParaCompra
      realizacao {
        nome
      }
      titulo
      ano {
        ano
      }
    }
  }
`

export default GET_DVDS
