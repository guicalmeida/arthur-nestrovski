const GET_COVERS = /* GraphQL */ `
  query GET_COVERS {
    letrasCover: galeria(where: { id: "cl0zf1sjq6s960bknej1zkgxq" }) {
      descricao
      foto {
        url(transformation: { image: { resize: { height: 350, width: 350 } } })
      }
      titulo
    }
    partiturasCover: galeria(where: { id: "cl101ru188w7p0bkn4aiuulob" }) {
      descricao
      foto {
        url(transformation: { image: { resize: { height: 350, width: 350 } } })
      }
      titulo
    }
  }
`

export default GET_COVERS
