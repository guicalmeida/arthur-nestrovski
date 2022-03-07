export default function GraphCMSImageLoader({ src, width }: Props) {
  const relativeSrc = (src: string) => {
    return src?.split('/').pop()
  }

  return `https://media.graphcms.com/resize=width:${width}/${relativeSrc(src)}`
}

interface Props {
  src: string
  width: number
}
