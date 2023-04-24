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
              <b>Arthur Nestrovski</b> (Porto Alegre, 1959) é músico, consultor
              de orquestras e gestor cultural. Foi diretor artístico da
              Orquestra Sinfônica do Estado de São Paulo (Osesp), de 2010 a 2022
              e também diretor artístico do Festival de Inverno de Campos do
              Jordão, de 2012 a 2022.
              <br />
              <br />
              Palestrante convidado em instituições brasileiras e estrangeiras,
              como USP, UFRJ, Unicamp, Johns Hopkins University, SESC-SP, The
              Salzburg Seminar e Instituto Tomie Ohtake, é autor de{' '}
              <i>Tudo Tem a Ver – Literatura e Música (2019)</i> e{' '}
              <i>Outras Notas Musicais</i> (2009), entre outros livros –
              incluindo vários premiados títulos de literatura infantil.
              <br />
              <br />
              Doutor em literatura e música pela Universidade de Iowa (EUA), foi
              professor titular de literatura comparada na PUC/SP (1991-2006) e
              articulista da <i>Folha de S.Paulo (1992-2009)</i>; e curador de
              projetos no Museu da Língua Portuguesa (SP) e no programa
              Petrobras Cultural, entre outras instituições. Mantém atividade
              musical como violonista e compositor, apresentando-se e gravando
              com artistas como Zé Miguel Wisnik, Zélia Duncan e Adriana
              Calcanhotto, no Brasil e no exterior.
              <br />
              <br />
              Lançou, entre outros, os CDs solo{' '}
              <i>Jobim Violão, Chico Violão</i> e <i>Violão Violão</i>, o DVD{' '}
              <i>O Fim da Canção</i> (com Wisnik e Luiz Tatit), e dois CDs de
              canções com Lívia Nestrovski: <i>Pós Você e Eu</i> e{' '}
              <i>Sarabanda</i>.
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
          <TabPanel value={tab} index={1}>
            <Typography>
              <b>Arthur Nestrovski </b>(b. 1959) is a classical guitarist,
              composer, and orchestra consultant. He was the artistic director
              of the São Paulo Symphony Orchestra from 2010 to 2022, and he was
              also the artistic director of the Campos do Jordão Winter Festival
              – the largest music festival in South America – from 2012 to 2022.
              <br />
              <br />
              He has been invited as a lecturer in such institutions as the
              Univ. of São Paulo, Rio de Janeiro Federal University, Johns
              Hopkins University, The Salzburg Seminar, and Instituto Tomie
              Ohtake (São Paulo). He is the author of{' '}
              <i>Tudo Tem a Ver – Literatura e Música</i> (2019) e{' '}
              <i>Outras Notas Musicais (2009)</i>, among other titles –
              including several award-winning books for children.
              <br />
              <br />
              Nestrovski holds a Ph.D in Literature and Music from the Univ. of
              Iowa (USA), and a B. A. in Music from York University (UK). He was
              a tenured professor of comparative literature at the Catholic
              University, São Paulo. For almost two decades a senior critic at{' '}
              <i>Folha de S.Paulo</i> and also a senior editor at PubliFolha
              (the newspaper’s publishing branch), he has also worked as a guest
              curator in such institutions as Museu da Língua Portuguesa (São
              Paulo) and Petrobras Cultural.
              <br />
              <br />
              As a guitarist and composer, he has performed and recorded next to
              such leading Brazilian names as José Miguel Wisnik, Zélia Duncan
              and Adriana Calcanhotto, both in Brazil and abroad. His list of
              recorded albums includes three solo CDs –{' '}
              <i>Jobim Violão, Chico Violão</i> and <i>Violão Violão</i> –, one
              DVD, <i>O Fim da Canção</i> (with Wisnik and Luiz Tatit), and two
              discs of songs performed with his daughter Lívia Nestrovski:{' '}
              <i>Pós Você e Eu</i> and <i>Sarabanda</i>.
            </Typography>
          </TabPanel>
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
