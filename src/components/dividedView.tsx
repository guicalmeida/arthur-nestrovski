import { MusicNote } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import universalSlugify from 'services/slugifyHelper'
import { partiturasECifrasProps } from 'types/api'

export default function DividedView({
  partiturasECifras,
}: partiturasECifrasProps) {
  const router = useRouter()

  const { query } = router

  const [pdf, setPdf] = useState<string>()
  const [selectedIndex, setSelectedIndex] = useState<number>()

  useEffect(() => {
    const thisPEC = partiturasECifras.find(
      (pec) => universalSlugify(pec.titulo) === query.selecionado
    )
    setPdf(thisPEC?.pdf?.url)
    setSelectedIndex(Number(query.index))

    console.log('a')
  }, [query])

  const handleListItemClick = (url: string, slug: string, index: number) => {
    setPdf(url)
    setSelectedIndex(index)
    router.push(`?selecionado=${slug}&index=${index}`, undefined, {
      shallow: true,
    })
  }
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: 'calc(91vh - 140px)',
        margin: '48px auto 16px auto',
      }}
    >
      <Box>
        <List
          sx={{
            maxWidth: '450px',
            marginRight: '48px',
            overflow: 'auto',
            height: '100%',
          }}
        >
          {partiturasECifras.map((pec, i) => {
            const slug = universalSlugify(pec.titulo)
            return (
              <>
                <ListItem
                  sx={{
                    cursor: 'pointer',
                    minHeight: '100px',
                  }}
                  key={slug}
                  onClick={() => handleListItemClick(pec?.pdf?.url, slug, i)}
                  selected={selectedIndex === i}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: 'primary.main' }}>
                      <MusicNote />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={pec?.titulo}
                    secondary={pec?.composicao}
                  />
                </ListItem>
                <Divider />
              </>
            )
          })}
        </List>
      </Box>
      <Box>
        <div style={{ height: '100%', width: '40vw', maxWidth: '650px' }}>
          {pdf ? (
            <object
              data={pdf}
              type="application/pdf"
              style={{ height: '100%', width: '100%' }}
            >
              <iframe src={pdf} style={{ height: '100%', width: '100%' }}>
                <p>This browser does not support PDF!</p>
              </iframe>
            </object>
          ) : (
            <Typography variant="h3" component="h2" sx={{ fontWeight: '100' }}>
              Selecione uma música
            </Typography>
          )}
        </div>
      </Box>
    </Container>
  )
}
