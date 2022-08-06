export interface LivroProps {
  id: number
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
  createdAt?: string
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
  id: number
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
  createdAt?: string
}

export interface CDsProps {
  cDs: CDProps[]
}

export interface CDUnitProps {
  cD: CDProps
}

export interface DVDProps {
  id: number
  artistas: string
  capa: ImageProps
  descricao: RichTextProps
  informacoesExtra: string
  linkParaCompra: string
  realizacao: RealizacaoProps
  titulo: string
  ano: AnoProps
  createdAt?: string
}

export interface DVDsProps {
  dvds: DVDProps[]
}

export interface DVDUnitProps {
  dvd: DVDProps
}

export interface PartituraECifraProps {
  id: number
  titulo: string
  pdf: ImageProps
  composicao: string
  ano: AnoProps
  createdAt?: string
}

export interface partiturasECifrasProps {
  partiturasECifras: PartituraECifraProps[]
}

export interface PartituraECifraUnitProps {
  partiturasECifras: PartituraECifraProps
}

export interface LetraProps {
  id: number
  composicao: string
  copyright: string
  letra: RichTextProps
  letraOriginal: RichTextProps
  titulo: string
  tituloOriginal: string
  ano: AnoProps
  createdAt?: string
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
  id: number
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
  texto: TextoProps
}

export interface NoticiaProps {
  id: number
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
  noticia: NoticiaProps
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
  id: number
  titulo: string
  linkDoVideoYouTube: string
  descricao: RichTextProps
  createdAt?: string
}

export interface VideosProps {
  videos: VideoProps[]
}

export interface ShowProps {
  id: number
  artistas: string
  createdAt: string
  descricao: RichTextProps
  fotos: ImageProps[]
  mapaDoPalco: ImageProps
  necessidadesTecnicas: RichTextProps
  repertorio: RichTextProps
  sobreOsArtistas: RichTextProps
  tipo: string
  titulo: string
}

export interface ShowsProps {
  shows: ShowProps[]
}

export interface ShowUnitProps {
  show: ShowProps
}

export interface ProducaoIntelectualProps {
  titulo: string
  veiculo: string
  observacao: string
  data: string
  autor: string
  tipo: string
}

export interface ProducoesIntelectuaisProps {
  page1: ProducaoIntelectualProps[]
  page2?: ProducaoIntelectualProps[]
}

export interface EventoProps {
  id: number
  descricao?: RichTextProps
  fim: string
  inicio: string
  localizacao?: {
    latitude?: number
    longitude?: number
  }
  titulo: string
  url?: string
  capa: ImageProps
  endereco?: string
  createdAt?: string
}

export interface EventosProps {
  eventos: EventoProps[]
}

export interface EventoUnitProps {
  evento: EventoProps
}

export interface HomeProps {
  cDs: {
    titulo: string
    capa: ImageProps
    ano: AnoProps
    realizacao: {
      nome: string
    }
    linkEmSpotify: string
  }[]
  eventos: EventoProps[]
  letras: {
    titulo: string
    composicao: string
  }[]
  livros: {
    ano: AnoProps
    autor: string
    capa: ImageProps
    editora: {
      titulo: string
    }
    titulo: string
    subtitulo: string
  }[]
  noticias: {
    capa: ImageProps
    subtitulo: string
    titulo: string
    texto: RichTextProps
    createdAt: string
  }[]
  partiturasECifras: {
    composicao: string
    titulo: string
  }[]
  textos: {
    autores: string
    titulo: string
    texto: RichTextProps
    subtitulo: string
    capa: ImageProps
    createdAt: string
  }[]
  videos: {
    linkDoVideoYouTube: string
    titulo: string
  }[]
}

export interface AllProps {
  cDs: CDProps[]
  eventos: EventoProps[]
  letras: LetraProps[]
  livros: LivroProps[]
  noticias: NoticiaProps[]
  partiturasECifras: PartituraECifraProps[]
  textos: TextoProps[]
  videos: VideoProps[]
  perfil: PerfilProps
  dvds: DVDProps[]
  shows: ShowProps[]
}
