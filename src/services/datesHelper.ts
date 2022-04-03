import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

export const formatIsoString = (date: string, format?: string) => {
  if (format) {
    return dayjs(date).format(format)
  } else {
    const dia = dayjs(date).format('DD')
    const mesEAno = dayjs(date).format('MMMM, YYYY')
    if (dia !== 'Invalid Date' && mesEAno !== 'Invalid Date') {
      return `${dia} de ${mesEAno}`
    }
    return
  }
}
