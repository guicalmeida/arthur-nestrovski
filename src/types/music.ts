import {
  CDProps,
  DVDProps,
  GaleriaProps,
  LetraProps,
  PartituraECifraProps,
} from './api'

export default interface MusicProps {
  cDs: CDProps[]
  dvds: DVDProps[]
  letras: LetraProps[]
  partiturasECifras: PartituraECifraProps[]
  letrasCover: GaleriaProps
  partiturasCover: GaleriaProps
}
