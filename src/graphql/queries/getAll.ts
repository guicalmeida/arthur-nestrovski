const GET_ALL = /* GraphQL */ `
  query GET_ALL {
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
    partiturasECifras {
      id
      composicao
      titulo
    }
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

export default GET_ALL
