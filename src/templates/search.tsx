/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Divider, TextField } from '@mui/material'
import NavDrawer from 'components/navDrawer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { searchSlugify } from 'services/slugifyHelper'
import { stripHtml } from 'string-strip-html'
import { AllProps } from 'types/api'

export default function SearchPage({ everything }: { everything: AllProps }) {
  const router = useRouter()
  const { query } = router
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  useEffect(() => {
    if (query.termos) {
      setText(query.termos.toString())
    }
  }, [query.termos])

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
  const sluggedSearch = searchSlugify(query?.termos?.toString())

  const results = valuesOnly.filter((result) => {
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
        <TextField
          id="filled-basic"
          label="Pesquisar"
          value={text}
          variant="filled"
          onChange={handleChange}
          size="medium"
          sx={{ width: '100%', maxWidth: '600px' }}
        />
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
      </Container>

      <div></div>
    </>
  )
}
