const GET_PERFIL = /* GraphQL */ `
  query GET_PERFIL {
    foto: asset(where: { id: "cl14ae9x09kzm0bkfwet1pn9n" }) {
      url
    }
    cv: asset(where: { id: "cl3w9phpbzg9x0elrkmqxk1iv" }) {
      url
    }
  }
`

export default GET_PERFIL
