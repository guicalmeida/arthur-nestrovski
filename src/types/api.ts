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
  categoriasLivro: TitleProps[]
}

export interface ImageProps {
  url: string
  width: number
  height: number
}
