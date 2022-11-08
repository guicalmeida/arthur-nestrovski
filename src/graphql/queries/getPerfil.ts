const GET_PERFIL = /* GraphQL */ `
  query GET_PERFIL {
    foto: asset(where: { id: "cl14ae9x09kzm0bkfwet1pn9n" }) {
      url
    }
    cv: asset(where: { id: "cla88ni9f07vv0bkm8sk4st7o" }) {
      url
    }
  }
`

export default GET_PERFIL
