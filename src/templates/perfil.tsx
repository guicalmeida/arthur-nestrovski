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
              <b>Arthur Nestrovski </b> (Porto Alegre, 1959) é violonista,
              compositor e ensaísta. Foi diretor artístico da Orquestra
              Sinfônica do Estado de São Paulo (Osesp), de 2010 a 2022 e também
              diretor artístico do Festival de Inverno de Campos do Jordão, de
              2012 a 2022.
              <br />
              <br />
              Doutor em literatura e música pela Universidade de Iowa (EUA), foi
              professor titular de literatura comparada na PUC/SP, articulista
              da <i>Folha de S.Paulo</i> e editor da PubliFolha. Autor de{' '}
              <i>Tudo Tem a Ver</i> – <i>Literatura e Música</i> (2019) e{' '}
              <i>Outras Notas Musicais</i> (2009), entre outros livros –
              incluindo vários premiados títulos de literatura infantil –,
              mantém também atividade musical como violonista e compositor,
              apresentando-se e gravando com artistas como Zé Miguel Wisnik,
              Zélia Duncan e Adriana Calcanhotto, no Brasil e no exterior.
              <br />
              <br />
              Lançou, entre outros, os CDs solo{' '}
              <i>Jobim Violão, Chico Violão </i>e <i>Violão Violão</i>, o DVD
              <i> O Fim da Canção</i> (com Wisnik e Luiz Tatit), e dois CDs de
              canções com Lívia Nestrovski: <i>Pós Você e Eu </i>(2016) e{' '}
              <i>Sarabanda</i> (2020).
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
              <b>
                <span>Arthur Nestrovski </span>
              </b>
              (b. 1959) is classical guitarrist, composer and music scholar. He
              was the artistic director of the São Paulo Symphony Orchestra from
              2010 to 2022, and he was also the artistic director of the Campos
              do Jordão Winter Festival – the largest music festival in South
              America – from 2012 to 2022.
              <br />
              <br />
              Nestrovski holds a Ph.D in Literature and Music from the Univ. of
              Iowa (USA), and a B. A. in Music from York University (UK). He was
              a tenured professor of comparative literature at the Catholic
              University, São Paulo. For almost two decades a senior critic at{' '}
              <i>Folha de S.Paulo </i>and also a senior editor at PubliFolha
              (the newspaper’s publishing branch), he is the author of{' '}
              <i>
                <span>Tudo Tem a Ver</span>
              </i>
              – <i>Literatura e Música</i> (2019) and
              <i> Outras Notas Musicais</i> (2009), among other titles –
              including several award-winning books for children.
              <br />
              <br />
              As a guitarrist and composer, he has performed and recorded next
              to such leading Brazilian names as José Miguel Wisnik, Zélia
              Duncan and Adriana Calcanhotto, both in Brazil and abroad. His
              list of recorded albums includes three solo CDs –{' '}
              <i>Jobim Violão, Chico Violão </i>
              and <i>Violão Violão</i> –, one DVD,
              <i> O Fim da Canção</i> (with Wisnik and Luiz Tatit), and two
              discs of songs performed with his daughter Lívia Nestrovski:{' '}
              <i>Pós Você e Eu </i>(2016) and
              <i>Sarabanda</i> (2020).
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
