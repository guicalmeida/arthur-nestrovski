export const GET_CDS_E_DVDS = /* GraphQL */ `
  query GET_CDS_E_DVDS {
    cDs {
      id
      ano {
        ano
      }
      capa {
        url
      }
      creditos
      descricao {
        html
      }
      faixas
      realizacao {
        nome
      }
      titulo
      createdAt
    }
    dvds {
      id
      ano {
        ano
      }
      artistas
      capa {
        url
      }
      descricao {
        html
      }
      informacoesExtra
      realizacao {
        nome
      }
      titulo
      createdAt
    }
  }
`

export const GET_LETRAS_E_PARTITURAS = /* GraphQL */ `
  query GET_LETRAS_E_PARTITURAS {
    letras {
      id
      composicao
      letra {
        html
      }
      letraOriginal {
        html
      }
      titulo
      tituloOriginal
      createdAt
    }
    partiturasECifras {
      id
      composicao
      titulo
    }
  }
`

export const GET_SHOWS_E_EVENTOS = /* GraphQL */ `
  query GET_SHOWS_E_EVENTOS {
    shows {
      id
      createdAt
      descricao {
        html
      }
      repertorio {
        html
      }
      sobreOsArtistas {
        html
      }
      titulo
    }
    eventos {
      id
      capa {
        url
      }
      descricao {
        html
      }
      createdAt
      titulo
    }
  }
`

export const GET_LIVROS_E_NOTICIAS = /* GraphQL */ `
  query GET_LIVROS_E_NOTICIAS {
    livros {
      id
      ano {
        ano
      }
      autor
      capa {
        url
      }
      categoriaLivro {
        titulo
      }
      cidade {
        titulo
      }
      descricao {
        html
      }
      editora {
        titulo
      }
      ilustracoes
      isbn
      createdAt
      subtitulo
      titulo
    }
    noticias {
      id
      subtitulo
      titulo
      texto {
        html
      }
      createdAt
    }
  }
`

export const GET_TEXTOS_E_VIDEOS = /* GraphQL */ `
  query GET_TEXTOS_E_VIDEOS {
    textos {
      id
      autores
      createdAt
      capa {
        url
      }
      titulo
      subtitulo
      veiculoDeDivulgacao
    }
    videos {
      id
      createdAt
      descricao {
        html
      }
      titulo
    }
  }
`
