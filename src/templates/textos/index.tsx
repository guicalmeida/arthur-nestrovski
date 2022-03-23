import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import TextsCard from 'components/textsCard'
import { getShortDescription } from 'services/shortDescriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { TextosProps } from 'types/api'

const TextosPage = ({ textos }: TextosProps) => {
  const bc = {
    Escrita: 'escrita',
    Textos: 'textos',
  }

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
        {textos.map((texto) => {
          const shortText = getShortDescription(texto?.texto.html)
          const slug = universalSlugify(texto.titulo)
          return (
            <TextsCard
              key={slug}
              text={{
                imageUrl: texto?.capa?.url,
                title: texto?.titulo,
                subtitle: texto?.subtitulo,
                date: texto?.createdAt,
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
