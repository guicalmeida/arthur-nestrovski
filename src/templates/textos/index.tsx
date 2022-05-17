import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import TextsCard from 'components/textsCard'
import dayjs from 'dayjs'
import { formatIsoString } from 'services/datesHelper'
import { getShortDescription } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { TextosProps } from 'types/api'

const TextosPage = ({ textos }: TextosProps) => {
  const bc = {
    Escrita: 'escrita',
    Textos: 'textos',
  }

  const sorted = textos.sort((a, b) =>
    dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1
  )

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>TEXTOS</NavHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          margin: '24px',
        }}
      >
        {sorted.map((texto) => {
          const shortText = getShortDescription(texto?.texto.html)
          const slug = universalSlugify(texto.titulo)
          return (
            <TextsCard
              key={slug}
              text={{
                imageUrl: texto?.capa?.url,
                title: texto?.titulo,
                subtitle: texto?.subtitulo,
                date: formatIsoString(texto?.createdAt),
              }}
              path={`/escrita/textos/${slug}`}
            >
              {shortText}
            </TextsCard>
          )
        })}
      </div>
    </>
  )
}

export default TextosPage
