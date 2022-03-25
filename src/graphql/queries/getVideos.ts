const GET_VIDEOS = /* GraphQL */ `
  query GET_VIDEOS {
    videos {
      titulo
      linkDoVideoYouTube
      descricao {
        html
      }
    }
  }
`

export default GET_VIDEOS
