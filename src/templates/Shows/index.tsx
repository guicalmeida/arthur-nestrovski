import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { ShowsProps } from 'types/api'

export default function ShowsPage({ shows }: ShowsProps) {
  const bc = {
    Shows: 'shows',
  }

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>SHOWS</NavHeader>
    </>
  )
}
