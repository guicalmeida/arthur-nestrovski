export interface LivroProps {
  titulo: string
  subtitulo: string
  linkParaCompra: string
  isbn: string
  ilustracoes: string
  editora: TitleProps
  descricao: RichTextProps
  cidade: TitleProps
  categoriaLivro: TitleProps
  capa: ImageProps
  autor: string
  ano: AnoProps
}

export interface RealizacaoProps {
  nome: string
}

export interface TitleProps {
  titulo: string
}

export interface RichTextProps {
  html: string
}

export interface AnoProps {
  ano: number
}

export interface LivrosProps {
  livros: LivroProps[]
  categoriasLivro?: TitleProps[]
}

export interface LivroUnitProps {
  livro: LivroProps
}

export interface ImageProps {
  url: string
  width: number
  height: number
}

export interface CDProps {
  titulo: string
  linkParaCompra: string
  linkEmYoutubeMusic: string
  linkEmTidal: string
  linkEmSpotify: string
  linkEmAppleMusic: string
  linkEmDeezer: string
  linkEmAmazonMusic: string
  letra: {
    composicao: string
    copyright: string
    tituloOriginal: string
    titulo: string
    letraOriginal: RichTextProps
    letra: RichTextProps
  }
  faixas: string
  descricao: RichTextProps
  creditos: string
  capa: ImageProps
  ano: AnoProps
}

export interface CDsProps {
  cDs: CDProps[]
}

export interface CDUnitProps {
  cD: CDProps
}

export interface DVDProps {
  artistas: string
  capa: ImageProps
  descricao: RichTextProps
  informacoesExtra: string
  linkParaCompra: string
  realizacao: RealizacaoProps
  titulo: string
  ano: AnoProps
}

export interface DVDsProps {
  dvds: DVDProps[]
}

export interface DVDUnitProps {
  dvd: DVDProps
}
