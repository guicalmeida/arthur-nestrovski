/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Divider, Typography } from '@mui/material'
import NavDrawer from 'components/navDrawer'
import SearchResultCard from 'components/searchResultCard'
import { useRouter } from 'next/router'
import { isDate1AfterDate2 } from 'services/datesHelper'
import { searchSlugify } from 'services/slugifyHelper'
import { stripHtml } from 'string-strip-html'
import { AllProps } from 'types/api'

export default function SearchPage({ everything }: { everything: AllProps }) {
  const router = useRouter()
  const { query } = router
  const searchtext = query?.termos?.toString()

  const valuesOnly: any[] = []
  Object.entries(everything).forEach((arr) => {
    const withKey = arr[1].map((item: any) => {
      return {
        ...item,
        mediaType: arr[0],
      }
    })
    valuesOnly.push(...withKey)
  })
  const sluggedSearch = searchSlugify(searchtext)

  const results = valuesOnly
    .filter((result) => {
      const sluggedResults = Object.values(result).map((value: any) => {
        let actualValue = value
        if (value && typeof value === 'object') {
          actualValue = stripHtml(
            Object.values(value as string | number)[0].toString()
          ).result
        }
        actualValue = searchSlugify(actualValue?.toString())
        return actualValue
      })
      return sluggedResults.some((result: string) => {
        return result.includes(sluggedSearch)
      })
    })
    .sort((a: any, b: any) => {
      const aDateType = a?.ano?.ano ?? a?.createdAt
      const bDateType = b?.ano?.ano ?? b?.createdAt
      return isDate1AfterDate2(aDateType, bDateType) ? -1 : 1
    })

  return (
    <>
      <NavDrawer />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{ mt: '32px', mb: '16px', textAlign: 'center' }}
        >
          Você pesquisou por &quot;{searchtext}&quot;
        </Typography>

        <Divider
          variant="middle"
          sx={{
            width: '250px',
            height: '3px',
            borderTop: '2px solid',
            borderColor: 'primary.main',
            margin: '15px 0',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            mb: '100px',
          }}
        >
          {results.map((result) => {
            return <SearchResultCard result={result} key={result?.id} />
          })}
          {results.length === 0 && <p> Nenhum resultado encontrado</p>}
        </Box>
      </Container>
    </>
  )
}
