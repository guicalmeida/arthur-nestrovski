import MostRecent from 'components/mostRecent'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import SideItemCard from 'components/sideItemCard'
import StyledContainer from 'components/styledContainer'
import MusicProps from 'types/groups'

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
      <StyledContainer>
        <SideItemCard
          imageUrl={latestCD?.capa.url}
          title="CDs"
          latestTitle={latestCD?.titulo}
          path="musica/cds"
        >
          <MostRecent
            publisher={latestCD?.realizacao?.nome}
            title={latestCD?.titulo}
            year={latestCD?.ano?.ano}
          />
        </SideItemCard>
        <SideItemCard
          imageUrl={latestDVD?.capa.url}
          title="DVDs"
          latestTitle={latestDVD?.titulo}
          path="musica/dvds"
        >
          <MostRecent
            publisher={latestDVD?.realizacao?.nome}
            title={latestDVD?.titulo}
            year={latestDVD?.ano?.ano}
          />
        </SideItemCard>
        <SideItemCard
          imageUrl={letrasCover?.foto.url}
          title="Letras"
          latestTitle={latestLyric?.titulo}
          path="musica/letras"
        >
          <MostRecent
            publisher={latestLyric?.composicao}
            title={latestLyric?.titulo}
            year={latestLyric?.ano?.ano}
          />
        </SideItemCard>
        <SideItemCard
          imageUrl={partiturasCover?.foto.url}
          title="Partituras e Cifras"
          latestTitle={latestPartitura?.titulo}
          path="musica/partituras-e-cifras"
        >
          <MostRecent
            publisher={latestPartitura?.composicao}
            title={latestPartitura?.titulo}
            year={latestPartitura?.ano?.ano}
          />
        </SideItemCard>
      </StyledContainer>
    </>
  )
}

export default MusicPage
