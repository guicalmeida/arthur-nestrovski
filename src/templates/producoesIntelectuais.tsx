import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { ProducoesIntelectuaisProps } from 'types/api'

export default function IntelectualPage({
  producoesIntelectuais,
}: ProducoesIntelectuaisProps) {
  const bc = {
    'Resenhas, artigos e ensaios': 'resenhas-artigos-e-ensaios',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>RESENHAS, ARTIGOS E ENSAIOS</NavHeader>
    </>
  )
}
