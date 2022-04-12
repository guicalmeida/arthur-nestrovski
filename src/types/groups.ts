import {
  CDProps,
  DVDProps,
  GaleriaProps,
  LetraProps,
  LivroProps,
  PartituraECifraProps,
  TextoProps,
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
  textos: TextoProps[]
  livros: LivroProps[]
}
