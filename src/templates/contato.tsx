/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, TextField } from '@mui/material'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'

export default function ContatoPage() {
  const bc = {
    Contato: 'contato',
  }
  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>CONTATO</NavHeader>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            name="contato2"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contato2" />
            <TextField required name="nome" label="Nome" variant="filled" />
            <TextField required name="email" label="E-mail" variant="filled" />
            <TextField
              required
              name="assunto"
              label="Assunto"
              variant="filled"
            />
            <TextField
              required
              name="mensagem"
              label="Mensagem"
              variant="filled"
              multiline
              minRows={6}
            />
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </form>
        </Box>
      </Container>
    </>
  )
}
