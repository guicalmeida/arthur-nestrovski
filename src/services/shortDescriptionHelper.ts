import { stripHtml } from 'string-strip-html'

export const getShortDescription = (string = '', charcount = 240) => {
  const strippedTags = stripHtml(string)
  return string ? `${strippedTags.result.slice(0, charcount)}...` : ''
}
