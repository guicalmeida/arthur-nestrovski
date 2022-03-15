import { Typography } from '@mui/material'

export default function RenderPDF({ pdf }: { pdf?: string }) {
  if (pdf) {
    return (
      <object
        data={pdf}
        type="application/pdf"
        style={{ height: '100%', width: '100%' }}
      >
        <iframe src={pdf} style={{ height: '100%', width: '100%' }}>
          <p>This browser does not support PDF!</p>
        </iframe>
      </object>
    )
  } else {
    return (
      <Typography variant="h3" component="h2" sx={{ fontWeight: '100' }}>
        Selecione uma música
      </Typography>
    )
  }
}
