export const GET_INTELECTUAL = /* GraphQL */ `
  query GET_INTELECTUAL {
    page1: producoesIntelectuais(first: 999) {
      titulo
      veiculo
      observacao
      data
      autor
      tipo
    }
    page2: producoesIntelectuais(skip: 999) {
      titulo
      veiculo
      observacao
      data
      autor
      tipo
    }
  }
`

export default GET_INTELECTUAL
