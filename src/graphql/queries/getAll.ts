const GET_ALL = /* GraphQL */ `
  query GET_ALL {
    cDs {
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
      subtitulo
      titulo
      texto {
        html
      }
      createdAt
    }
    partiturasECifras {
      composicao
      titulo
    }
    shows {
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
      createdAt
      descricao {
        html
      }
      titulo
    }
  }
`

export default GET_ALL
