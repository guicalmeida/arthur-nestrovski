/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Container,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import TabPanel from 'components/tabPanel'
import { useState } from 'react'
import { PerfilProps } from 'types/api'

export default function PerfilPage({ foto, cv }: PerfilProps) {
  const bc = {
    Perfil: 'perfil',
  }

  const [tab, setTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }
  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>PERFIL</NavHeader>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mt: 3,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '24px',
            gap: '48px',
          }}
        >
          <img
            style={{ width: 300, height: 350, objectFit: 'contain' }}
            src={foto?.url}
            alt="foto de perfil de Arthur Nestrovski"
          ></img>
          <Typography
            component="h2"
            variant="h2"
            sx={{ letterSpacing: '5px', color: 'primary.main' }}
          >
            ARTHUR NESTROVSKI
          </Typography>
        </Paper>
        <Box sx={{ p: 3 }}>
          <Box>
            <Tabs value={tab} onChange={handleChange}>
              <Tab label="Português"></Tab>
              <Tab label="English"></Tab>
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <Typography>
              <strong>Arthur Nestrovski</strong> (Porto Alegre, 1959) é diretor
              artístico da Orquestra Sinfônica do Estado de São Paulo, desde
              2010. Em 2012, foi nomeado também diretor artístico do Festival de
              Inverno de Campos do Jordão.
            </Typography>
            <br />
            <Typography>
              Doutor em literatura e música pela Universidade de Iowa (EUA), foi
              professor titular de literatura comparada na PUC/SP, articulista
              da <em>Folha de S.Paulo</em> e editor da PubliFolha. Autor de{' '}
              <em>Tudo Tem a Ver</em> – Literatura e Música (2019) e{' '}
              <em>Outras Notas Musicais</em> (2009), entre outros livros –
              incluindo vários premiados títulos de literatura infantil –,
              mantém também atividade musical como violonista e compositor,
              apresentando-se e gravando com artistas como Zé Miguel Wisnik,
              Zélia Duncan e Adriana Calcanhotto, no Brasil e no exterior.
            </Typography>
            <br />
            <Typography>
              Lançou, entre outros, os CDs solo <em>Jobim Violão</em>e{' '}
              <em>Chico Violão</em>, o DVD
              <em>O Fim da Canção</em> (com Wisnik e Luiz Tatit), e dois CDs de
              canções com Lívia Nestrovski: <em>Pós Você e Eu</em>
              (2016) e <em>Sarabanda</em> (2020).
            </Typography>
            <Button
              variant="text"
              size="large"
              sx={{
                width: 'fit-content',
                margin: '24px auto',
                color: 'primary.dark',
              }}
              href={cv?.url}
              target="__blank"
            >
              Ver currículo completo
            </Button>
          </TabPanel>
          <TabPanel value={tab} index={1}></TabPanel>
        </Box>
      </Container>
    </>
  )
}
