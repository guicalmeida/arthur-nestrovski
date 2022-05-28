/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @next/next/no-img-element */
import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import TabPanel from 'components/tabPanel'
import useWindowSize from 'hooks/useWindowResize'
import { useState } from 'react'
import { PerfilProps } from 'types/api'

export default function PerfilPage({ cv }: PerfilProps) {
  const bc = {
    Perfil: 'perfil',
  }

  const [tab, setTab] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  const { width } = useWindowSize() || {}
  const breakLine = width! <= 900

  return (
    <div style={{ maxHeight: '100vh' }}>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>PERFIL</NavHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: breakLine ? 'column' : 'row',
          justifyContent: breakLine ? 'start' : 'space-between',
          alignItems: breakLine ? 'center' : 'start',
          minHeight: 'calc(100vh - 155px)',
        }}
      >
        <Box
          sx={{
            pl: 3,
            pt: 3,
            height: 'fit-content',
            maxWidth: breakLine ? '100%' : '50%',
          }}
        >
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
              <br />
              <br />
              Doutor em literatura e música pela Universidade de Iowa (EUA), foi
              professor titular de literatura comparada na PUC/SP, articulista
              da <em>Folha de S.Paulo</em> e editor da PubliFolha. Autor de
              <em> Tudo Tem a Ver</em> – Literatura e Música (2019) e
              <em> Outras Notas Musicais</em> (2009), entre outros livros –
              incluindo vários premiados títulos de literatura infantil –,
              mantém também atividade musical como violonista e compositor,
              apresentando-se e gravando com artistas como Zé Miguel Wisnik,
              Zélia Duncan e Adriana Calcanhotto, no Brasil e no exterior.
              <br />
              <br />
              Lançou, entre outros, os CDs solo <em> Jobim Violão </em>e
              <em> Chico Violão</em>, o DVD
              <em> O Fim da Canção</em> (com Wisnik e Luiz Tatit), e dois CDs de
              canções com Lívia Nestrovski: <em> Pós Você e Eu </em>
              (2016) e <em>Sarabanda</em> (2020).
            </Typography>
            <Button
              variant="text"
              size="large"
              sx={{
                width: 'fit-content',
                color: 'primary.dark',
                marginTop: '12px',
              }}
              href={cv?.url}
              target="__blank"
            >
              Ver currículo completo
            </Button>
          </TabPanel>
          <TabPanel value={tab} index={1}></TabPanel>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 'auto',
          }}
        >
          <img
            src="https://media.graphassets.com/gw26B3PTQrCQeMZtYa9v"
            alt="foto de perfil de Arthur Nestrovski"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'scale-down',
              objectPosition: 'right bottom',
              paddingLeft: '24px',
            }}
          ></img>
        </Box>
      </div>
    </div>
  )
}
