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
          mt: 5,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            name="contato"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contato" />
            <TextField required label="Nome" variant="filled" />
            <TextField required label="E-mail" variant="filled" />
            <TextField required label="Assunto" variant="filled" />
            <TextField
              required
              label="Mensagem"
              variant="filled"
              multiline
              minRows={6}
            />
            <div data-netlify-recaptcha="true"></div>
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </form>
        </Box>
      </Container>
    </>
  )
}
