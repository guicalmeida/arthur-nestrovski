import {
  CDProps,
  DVDProps,
  GaleriaProps,
  LetraProps,
  LivrosProps,
  PartituraECifraProps,
  ProducoesIntelectuaisProps,
  TextosProps,
} from './api'

export default interface MusicProps {
  cDs: CDProps[]
  dvds: DVDProps[]
  letras: LetraProps[]
  partiturasECifras: PartituraECifraProps[]
  letrasCover: GaleriaProps
  partiturasCover: GaleriaProps
}

export interface EscritaProps {
  partiturasCover: GaleriaProps
  page1: ProducoesIntelectuaisProps
  textos: TextosProps
  livros: LivrosProps
}
