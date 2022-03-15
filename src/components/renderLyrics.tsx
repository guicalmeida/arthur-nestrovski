import { ChevronRight } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { SetLetraProps } from 'types/setLyrics'

export default function RenderLyrics({
  letra,
  letraOriginal,
  titulo,
  tituloOriginal,
  showOriginal,
}: SetLetraProps) {
  const [original, setOriginal] = useState<boolean>(false)

  useEffect(() => {
    const state = showOriginal ?? false
    setOriginal(state)
  }, [showOriginal])
  if (letra) {
    return (
      <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
        {original ? (
          <Button endIcon={<ChevronRight />} onClick={() => setOriginal(false)}>
            veja a versão de Arthur Nestrovski
          </Button>
        ) : (
          letraOriginal && (
            <Button
              endIcon={<ChevronRight />}
              onClick={() => setOriginal(true)}
            >
              veja a versão original
            </Button>
          )
        )}
        <Typography variant="h4" component="h2" sx={{ color: 'primary.dark' }}>
          {original ? tituloOriginal : titulo}
        </Typography>
        <div
          dangerouslySetInnerHTML={{
            __html: original ? letraOriginal ?? '' : letra,
          }}
        />
      </div>
    )
  } else {
    return (
      <Typography variant="h3" component="h2" sx={{ fontWeight: '100' }}>
        Selecione uma música
      </Typography>
    )
  }
}
