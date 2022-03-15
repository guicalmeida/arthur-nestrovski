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
} from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import universalSlugify from 'services/slugifyHelper'
import { LetraProps, PartituraECifraProps } from 'types/api'
import { SetLetraProps } from 'types/setLyrics'
import RenderLyrics from './renderLyrics'
import RenderPDF from './renderPDF'

export default function DividedView({ partiturasECifras, letras }: Props) {
  const items = partiturasECifras || letras

  const router = useRouter()
  const { query } = router

  const [pdf, setPdf] = useState<string>()
  const [letra, setLetra] = useState<SetLetraProps>()
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const [original, setOriginal] = useState(false)

  useEffect(() => {
    if (partiturasECifras) {
      const thisPEC = partiturasECifras?.find(
        (pec) => universalSlugify(pec.titulo) === query.selecionado
      )
      setPdf(thisPEC?.pdf?.url)
    } else if (letras) {
      const thisLetra = letras?.find(
        (letra) => universalSlugify(letra.titulo) === query.selecionado
      )
      const { letra, letraOriginal, titulo, tituloOriginal } = thisLetra || {}
      setLetra({
        letra: letra?.html,
        letraOriginal: letraOriginal?.html,
        titulo,
        tituloOriginal,
        showOriginal: original,
      })
    }
    setSelectedIndex(Number(query.index))
  }, [letras, original, partiturasECifras, query])

  const handleListItemClick = (
    slug: string,
    index: number,
    url?: string,
    letras?: SetLetraProps
  ) => {
    if (url) {
      setPdf(url)
    } else if (letras) {
      setLetra(letras)
      setOriginal(false)
    }
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
          {items?.map((item, i) => {
            const slug = universalSlugify(item.titulo)
            return (
              <Fragment key={slug}>
                <ListItem
                  sx={{
                    cursor: 'pointer',
                    minHeight: '100px',
                  }}
                  onClick={() =>
                    'letra' in item
                      ? handleListItemClick(slug, i, undefined, {
                          letra: item?.letra?.html,
                          letraOriginal: item?.letraOriginal?.html,
                        })
                      : handleListItemClick(slug, i, item?.pdf?.url)
                  }
                  selected={selectedIndex === i}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: 'primary.main' }}>
                      <MusicNote />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <ListItemText secondary={item?.composicao}>
                      {'letra' in item && item?.tituloOriginal ? (
                        <span style={{ fontStyle: 'italic' }}>
                          {item?.tituloOriginal}/{' '}
                        </span>
                      ) : (
                        ''
                      )}
                      {item?.titulo}
                    </ListItemText>
                    {'copyright' in item ? (
                      <p
                        style={{
                          fontStyle: 'italic',
                          fontSize: '11px',
                          fontWeight: '300',
                          margin: 0,
                          color: '#979797',
                        }}
                      >
                        {item.copyright}
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </ListItem>
                <Divider />
              </Fragment>
            )
          })}
        </List>
      </Box>
      <Box>
        <div style={{ height: '100%', width: '40vw', maxWidth: '650px' }}>
          {letras ? (
            <RenderLyrics
              letra={letra?.letra}
              letraOriginal={letra?.letraOriginal}
              titulo={letra?.titulo}
              tituloOriginal={letra?.tituloOriginal}
              showOriginal={letra?.showOriginal}
            />
          ) : (
            <RenderPDF pdf={pdf} />
          )}
        </div>
      </Box>
    </Container>
  )
}

interface Props {
  partiturasECifras?: PartituraECifraProps[]
  letras?: LetraProps[]
}
