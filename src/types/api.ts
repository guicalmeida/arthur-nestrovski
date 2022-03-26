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
  width?: number
  height?: number
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
  letra: TitleProps
  realizacao: {
    nome: string
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

export interface PartituraECifraProps {
  titulo: string
  pdf: ImageProps
  composicao: string
  ano: AnoProps
}

export interface partiturasECifrasProps {
  partiturasECifras: PartituraECifraProps[]
}

export interface PartituraECifraUnitProps {
  partiturasECifras: PartituraECifraProps
}

export interface LetraProps {
  composicao: string
  copyright: string
  letra: RichTextProps
  letraOriginal: RichTextProps
  titulo: string
  tituloOriginal: string
  ano: AnoProps
}

export interface LetrasProps {
  letras: LetraProps[]
}

export interface LetraUnitProp {
  letras: LetraProps
}

export interface GaleriaProps {
  titulo?: string
  descricao?: string
  foto: ImageProps
  createdAt?: string
}

export interface GaleriasProps {
  galerias: GaleriaProps[]
}

export interface TextoProps {
  autores: string
  linkOriginal: string
  subtitulo: string
  titulo: string
  texto: RichTextProps
  veiculoDeDivulgacao: string
  createdAt: string
  capa: ImageProps
}

export interface TextosProps {
  textos: TextoProps[]
}

export interface TextoUnitProps {
  textos: TextoProps
}

export interface NoticiaProps {
  titulo: string
  subtitulo: string
  createdAt: string
  texto: RichTextProps
  capa: ImageProps
}

export interface NoticiasProps {
  noticias: NoticiaProps[]
}

export interface NoticiaUnitProps {
  noticias: NoticiaProps
}

export interface PerfilProps {
  cv: {
    url: string
  }
  foto: {
    url: string
  }
}

export interface VideoProps {
  titulo: string
  linkDoVideoYouTube: string
  descricao: RichTextProps
}

export interface VideosProps {
  videos: VideoProps[]
}
