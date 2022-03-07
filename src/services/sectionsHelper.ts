const sections = {
  Início: true,
  Perfil: true,
  Notícias: true,
  Agenda: true,
  Livros: true,
  Textos: {
    'Resenhas, artigos e ensaios': true,
  },
  Música: {
    CDs: true,
    DVDs: true,
    'Partituras e Cifras': true,
    Letras: true,
  },
  Videos: true,
  Shows: true,
  Galeria: true,
  Contato: true,
}

export interface Sections {
  Início: string
  Perfil: string
  Notícias: string
  Agenda: string
  Livros: string
  Textos: {
    'Resenhas, artigos e ensaios': string
  }
  Música: {
    CDs: string
    DVDs: string
    'Partituras e Cifras': string
    Letras: string
  }
  Videos: string
  Shows: string
  Galeria: string
  Contato: string
}

export default sections
