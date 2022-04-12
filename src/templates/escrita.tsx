import MostRecent from 'components/mostRecent'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import SideItemCard from 'components/sideItemCard'
import StyledContainer from 'components/styledContainer'
import { formatIsoString, isDate1AfterDate2 } from 'services/datesHelper'
import { EscritaProps } from 'types/groups'

export default function EscritaPage({
  textos,
  livros,
  partiturasCover,
}: EscritaProps) {
  const bc = {
    Escrita: 'escrita',
  }

  const latestText = textos?.sort((a, b) =>
    isDate1AfterDate2(a.createdAt, b.createdAt) ? -1 : 1
  )[0]
  const latestBook = livros?.sort((a, b) =>
    a.ano?.ano > b.ano?.ano ? -1 : 1
  )[0]

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>ESCRITA</NavHeader>
      <StyledContainer>
        <SideItemCard
          imageUrl={partiturasCover.foto.url}
          title="Resenhas, artigos e ensaios"
          showLatest={false}
          path="/escrita/resenhas-artigos-e-ensaios"
        >
          <span>
            Coletânea de todas resenhas, artigos e ensaios escritos por Arthur
            Nestrovski nos últimos 40 anos.
          </span>
        </SideItemCard>
        <SideItemCard
          imageUrl={latestText?.capa?.url}
          title="Textos"
          latestTitle={latestText?.titulo}
          path="/escrita/textos"
        >
          <MostRecent
            publisher={latestText?.subtitulo}
            title={latestText?.titulo}
            year={formatIsoString(latestText?.createdAt)}
          />
        </SideItemCard>
        <SideItemCard
          imageUrl={latestBook?.capa?.url}
          title="Livros"
          latestTitle={latestBook?.titulo}
          path="/escrita/textos"
        >
          <MostRecent
            publisher={latestBook?.editora.titulo}
            title={latestBook?.titulo}
            year={latestBook?.ano?.ano}
          />
        </SideItemCard>
      </StyledContainer>
    </>
  )
}
