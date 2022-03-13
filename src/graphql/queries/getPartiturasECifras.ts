const GET_MUSICSHEET = /* GraphQL */ `
  query GET_MUSICSHEET {
    partiturasECifras {
      titulo
      pdf {
        url
      }
      composicao
      ano {
        ano
      }
    }
  }
`

export default GET_MUSICSHEET
