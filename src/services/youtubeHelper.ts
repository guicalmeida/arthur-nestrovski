//source: https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url

function youtubeParser(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(shorts\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[8].length == 11 ? match[8] : false
}

export function getYoutubeEmbedLink(url: string) {
  const id = youtubeParser(url)

  return `https://www.youtube.com/embed/${id}`
}
