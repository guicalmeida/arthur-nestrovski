import slugify from 'slugify'

export default function universalSlugify(string: string) {
  return slugify(string, {
    lower: true,
    remove: /[.,:]/g,
  })
}
