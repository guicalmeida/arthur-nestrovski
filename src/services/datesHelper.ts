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

export const isDate1AfterDate2 = (date1: string, date2: string) => {
  return dayjs(date1).isAfter(dayjs(date2))
}

export const getEventDateInfo = (date1: string, date2: string): string => {
  if (date2) {
    if (dayjs(date1).isSame(dayjs(date2), 'day')) {
      return `${dayjs(date1).format('DD/MM/YYYY')}, das ${dayjs(date1).format(
        'HH:mm'
      )} às ${dayjs(date2).format('HH:mm')}`
    } else {
      return `De ${dayjs(date1).format('DD/MM/YYYY')} às ${dayjs(date1).format(
        'HH:mm'
      )} a ${dayjs(date2).format('DD/MM/YYYY')} às ${dayjs(date2).format(
        'HH:mm'
      )}`
    }
  } else {
    return `${dayjs(date1).format('DD/MM/YYYY')}, às ${dayjs(date1).format(
      'HH:mm'
    )}`
  }
}
