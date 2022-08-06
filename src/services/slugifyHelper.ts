import slugify from 'slugify'

export default function universalSlugify(string = '') {
  return slugify(string, {
    lower: true,
    remove: /[.,:/"()]/g,
  })
}

export function searchSlugify(string = '') {
  return slugify(string, {
    replacement: ' ',
    lower: true,
  })
}
