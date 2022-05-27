export function SpotifyEmbed({ url }: { url: string }) {
  const src = url?.replace('/album/', '/embed/album/')
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={src}
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  )
}
