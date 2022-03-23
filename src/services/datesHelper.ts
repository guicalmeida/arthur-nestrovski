import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

export const formatIsoString = (date: string, format?: string) => {
  if (format) {
    return dayjs(date).format(format)
  } else {
    const dia = dayjs(date).format('DD')
    const mesEAno = dayjs(date).format('MMMM, YYYY')
    return `${dia} de ${mesEAno}`
  }
}
