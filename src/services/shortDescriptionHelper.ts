import { stripHtml } from 'string-strip-html'

export const getShortDescription = (string = '', charcount = 240) => {
  const strippedTags = stripHtml(string)
  const sliced = strippedTags.result.slice(0, charcount)
  if (sliced.length === strippedTags.result.length) {
    return strippedTags.result
  } else if (sliced.charAt(sliced.length - 1) === ' ') {
    return `${sliced.slice(0, sliced.length - 2)}...`
  } else if (sliced.charAt(sliced.length - 1) === '.') {
    return `${sliced.slice(0, sliced.length - 2)}...`
  } else {
    return `${sliced}...`
  }
}
