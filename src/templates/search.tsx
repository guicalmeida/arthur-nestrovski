import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { useRouter } from 'next/router'
import { AllProps } from 'types/api'

export default function SearchPage({ everything }: { everything: AllProps }) {
  const router = useRouter()
  const { query } = router
  return (
    <>
      <NavDrawer />
      <NavHeader isSearch>{query?.termos}</NavHeader>
      <div></div>
    </>
  )
}
