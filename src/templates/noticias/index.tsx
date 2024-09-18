import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import TextsCard from 'components/textsCard'
import dayjs from 'dayjs'
import { formatIsoString } from 'services/datesHelper'
import { getShortDescription } from 'services/descriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { NoticiasProps } from 'types/api'

export default function NoticiasPage({ noticias }: NoticiasProps) {
  const bc = {
    Notícias: 'notícias',
  }

  const sorted = noticias.sort((a, b) =>
    dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1
  )

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>NOTÍCIAS</NavHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          margin: '24px',
          marginBottom: '100px',
        }}
      >
        {sorted.map((noticia) => {
          const shortText = getShortDescription(noticia?.texto?.html)
          const slug = universalSlugify(
            noticia?.titulo + '-' + formatIsoString(noticia?.createdAt)
          )
          return (
            <div key={slug}>
              <TextsCard
                text={{
                  title: noticia?.titulo,
                  subtitle: noticia?.subtitulo,
                  date: formatIsoString(noticia?.createdAt),
                  imageUrl: noticia?.capa?.url,
                }}
                path={`/noticias/${slug}`}
              >
                {shortText}
              </TextsCard>
            </div>
          )
        })}
      </div>
    </>
  )
}
