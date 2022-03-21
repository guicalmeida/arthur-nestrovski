import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import SideItemCard from 'components/sideItemCard'
import MusicProps from 'types/music'

const MusicPage = ({
  cDs,
  dvds,
  letras,
  partiturasECifras,
  letrasCover,
  partiturasCover,
}: MusicProps) => {
  const bc = {
    Música: 'musica',
  }

  const latestCD = cDs?.sort((a, b) => (a.ano?.ano > b.ano?.ano ? -1 : 1))[0]
  const latestDVD = dvds?.sort((a, b) => (a.ano?.ano > b.ano?.ano ? -1 : 1))[0]
  const latestLyric = letras?.sort((a, b) =>
    a.ano?.ano > b.ano?.ano ? -1 : 1
  )[0]
  const latestPartitura = partiturasECifras?.sort((a, b) =>
    a.ano?.ano > b.ano?.ano ? -1 : 1
  )[0]

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>MÚSICA</NavHeader>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          margin: '24px',
        }}
      >
        <SideItemCard
          latest={{
            imageUrl: latestCD?.capa.url,
            publisher: latestCD?.realizacao?.nome,
            title: latestCD?.titulo,
            year: latestCD?.ano?.ano,
          }}
          path="musica/cds"
        >
          CDs
        </SideItemCard>
        <SideItemCard
          latest={{
            imageUrl: latestDVD?.capa.url,
            publisher: latestDVD?.realizacao?.nome,
            title: latestDVD?.titulo,
            year: latestDVD?.ano?.ano,
          }}
          path="musica/dvds"
        >
          DVDs
        </SideItemCard>
        <SideItemCard
          latest={{
            imageUrl: letrasCover?.foto.url,
            publisher: latestLyric?.composicao,
            title: latestLyric?.titulo,
          }}
          path="musica/letras"
        >
          Letras
        </SideItemCard>
        <SideItemCard
          latest={{
            imageUrl: partiturasCover?.foto.url,
            publisher: latestPartitura?.composicao,
            title: latestPartitura?.titulo,
          }}
          path="musica/partituras-e-cifras"
        >
          Partituras e Cifras
        </SideItemCard>
      </div>
    </>
  )
}

export default MusicPage
