const GET_HOME = /* GraphQL */ `
  query GET_HOME {
    cDs(orderBy: publishedAt_DESC, first: 1) {
      titulo
      capa {
        url
      }
      ano {
        ano
      }
      realizacao {
        nome
      }
      linkEmSpotify
    }
    eventos(first: 1, orderBy: publishedAt_DESC) {
      capa {
        url
      }
      inicio
      titulo
      fim
      localizacao {
        latitude
        longitude
      }
    }
    galerias(first: 4, orderBy: publishedAt_DESC) {
      foto {
        url
      }
    }
    letras(first: 1, orderBy: publishedAt_DESC) {
      titulo
      composicao
    }
    livros(first: 1, orderBy: publishedAt_DESC) {
      ano {
        ano
      }
      autor
      capa {
        url
      }
      editora {
        titulo
      }
      titulo
      subtitulo
    }
    noticias(first: 1, orderBy: publishedAt_DESC) {
      capa {
        url
      }
      subtitulo
      titulo
      texto {
        html
      }
      createdAt
    }
    partiturasECifras(first: 1, orderBy: publishedAt_DESC) {
      composicao
      titulo
    }
    textos(first: 1) {
      autores
      titulo
      texto {
        html
      }
      subtitulo
      capa {
        url
      }
      createdAt
    }
    videos(first: 1, orderBy: publishedAt_DESC) {
      linkDoVideoYouTube
    }
  }
`

export default GET_HOME
