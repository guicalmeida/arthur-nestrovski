const sections = {
  Início: '/',
  Perfil: '/perfil',
  Notícias: '/noticias',
  Agenda: '/agenda',
  Livros: '/livros',
  Textos: {
    'Resenhas, artigos e ensaios': '/resenhas-artigos-e-ensaios',
  },
  Música: {
    CDs: '/cds',
    DVDs: '/dvds',
    'Partituras e Cifras': '/partituras-e-cifras',
    Letras: '/letras',
  },
  Videos: '/videos',
  Shows: '/shows',
  Galeria: '/galeria',
  Contato: '/contato',
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
