import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import TextsCard from 'components/textsCard'
import dayjs from 'dayjs'
import { getShortDescription } from 'services/shortDescriptionHelper'
import universalSlugify from 'services/slugifyHelper'
import { EventoProps, EventosProps } from 'types/api'
import 'dayjs/locale/pt-br'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Container, Typography } from '@mui/material'
import { getEventDateInfo } from 'services/datesHelper'
import EventCard from 'components/eventCard'

dayjs.locale('pt-br')
dayjs.extend(customParseFormat)

export default function AgendaPage({ eventos }: EventosProps) {
  const bc = {
    Agenda: 'agenda',
  }

  const months: { [key: string]: EventoProps[] } = {}

  eventos?.forEach((evento) => {
    const dateIndex = dayjs(evento.inicio).format('MMMM YYYY')

    if (!Object.keys(months).includes(dateIndex)) {
      months[dateIndex] = []
    }
    months[dateIndex].push(evento)
  })

  const thisMonthEvents = eventos?.filter((evento) =>
    dayjs().isSame(dayjs(evento?.inicio), 'month')
  )
  const hasEventsThisMonth = thisMonthEvents && thisMonthEvents.length > 0

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>AGENDA</NavHeader>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            margin: '24px',
          }}
        >
          {hasEventsThisMonth && (
            <>
              <Typography
                sx={{
                  fontWeight: 600,
                  letterSpacing: '5px',
                  marginTop: '10px',
                  textAlign: 'middle',
                }}
                variant="h4"
                component="h2"
                color="text.secondary"
              >
                ESTE MÊS
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px',
                  margin: '24px',
                }}
              >
                {thisMonthEvents.map((evento) => {
                  const shortText = getShortDescription(evento?.descricao?.html)
                  const slug = universalSlugify(evento?.titulo)
                  const { inicio, fim } = evento || {}

                  const date = getEventDateInfo(inicio, fim)

                  return (
                    <TextsCard
                      key={slug}
                      text={{
                        title: evento?.titulo,
                        date,
                        imageUrl: evento?.capa?.url,
                      }}
                      path={`/agenda/${slug}`}
                      calendar={true}
                    >
                      {shortText}
                    </TextsCard>
                  )
                })}
              </div>
              <div
                role="separator"
                style={{
                  height: '1px',
                  width: '100%',
                  backgroundColor: 'lightgrey',
                }}
              ></div>
              <Typography
                sx={{
                  fontWeight: 600,
                  letterSpacing: '5px',
                  marginTop: '10px',
                  textAlign: 'middle',
                }}
                variant="h4"
                component="h2"
                color="text.secondary"
              >
                TODOS EVENTOS
              </Typography>
            </>
          )}
          {Object.entries(months)
            .sort((a, b) => {
              return dayjs(a[0], 'MMMM YYYY').isAfter(dayjs(b[0], 'MMMM YYYY'))
                ? -1
                : 1
            })
            .map((month) => {
              return (
                <div key={month[0]}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      letterSpacing: '5px',
                      marginTop: '10px',
                    }}
                    variant="h4"
                    component="h2"
                    color="text.secondary"
                  >
                    {month[0].toUpperCase()}
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '24px',
                      margin: '24px',
                    }}
                  >
                    {month[1].map((evento) => {
                      const { inicio, fim, descricao, titulo, capa, endereco } =
                        evento || {}

                      const description = getShortDescription(descricao?.html)
                      const path = universalSlugify(titulo)

                      const date = getEventDateInfo(inicio, fim)
                      const props = {
                        date,
                        description,
                        path,
                        title: titulo,
                        cover: capa?.url,
                        address: endereco,
                      }

                      return <EventCard props={props} key={path} />
                    })}
                  </div>
                </div>
              )
            })}
        </div>
      </Container>
    </>
  )
}
