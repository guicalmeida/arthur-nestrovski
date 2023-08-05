import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import dayjs from 'dayjs'
import universalSlugify from 'services/slugifyHelper'
import { EventoProps, EventosProps } from 'types/api'
import 'dayjs/locale/pt-br'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Container, Typography } from '@mui/material'
import { getEventDateInfo } from 'services/datesHelper'
import EventCard from 'components/eventCard'
import ItemSlider from 'components/slider'

dayjs.locale('pt-br')
dayjs.extend(customParseFormat)

function EventList({
  monthEventArr,
}: {
  monthEventArr: [string, EventoProps[]]
}) {
  return (
    <div key={monthEventArr[0]} style={{ width: '100%' }}>
      <Typography
        sx={{
          fontWeight: 400,
          letterSpacing: '5px',
          margin: '16px 0',
        }}
        variant="h4"
        component="h2"
        color="text.secondary"
      >
        {monthEventArr[0].toUpperCase()}
      </Typography>
      <ItemSlider
        initialSlides={
          monthEventArr[1].length > 3 ? 3 : monthEventArr[1].length
        }
      >
        {monthEventArr[1].map((evento) => {
          const props = getEventProps(evento)

          return <EventCard props={props} key={props.title} />
        })}
      </ItemSlider>
    </div>
  )
}

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

  const hasFutureEvents = eventos.some(
    (event) =>
      dayjs().isSame(dayjs(event.inicio), 'month') ||
      dayjs().isAfter(dayjs(event.inicio), 'month')
  )

  const monthsSorted = Object.entries(months).sort((a, b) => {
    return dayjs(a[0], 'MMMM YYYY').isAfter(dayjs(b[0], 'MMMM YYYY')) ? -1 : 1
  })

  const nextEvents = monthsSorted
    .filter(
      (month) =>
        dayjs(month[0], 'MMMM YYYY').isSame(dayjs(), 'month') ||
        dayjs(month[0], 'MMMM YYYY').isAfter(dayjs(), 'month')
    )
    .sort((a, b) =>
      dayjs(a[0], 'MMMM YYYY').isAfter(dayjs(b[0], 'MMMM YYYY')) ? 1 : -1
    )

  const prevEvents = monthsSorted.filter((month) => {
    return dayjs(month[0], 'MMMM YYYY').isBefore(dayjs(), 'month')
  })

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>AGENDA</NavHeader>
      <Container style={{ marginBottom: '100px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            margin: '24px',
          }}
        >
          {hasFutureEvents && (
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
                PRÓXIMOS EVENTOS
              </Typography>
              {nextEvents.map((month) => {
                return <EventList monthEventArr={month} key={month[0]} />
              })}
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
                EVENTOS PASSADOS
              </Typography>
            </>
          )}
          {prevEvents.map((month) => {
            return <EventList monthEventArr={month} key={month[0]} />
          })}
        </div>
      </Container>
    </>
  )
}

const getEventProps = (evento: EventoProps) => {
  const { inicio, fim, titulo, capa, endereco } = evento || {}

  const path = universalSlugify(titulo)

  const date = getEventDateInfo(inicio, fim)
  return {
    date,
    path,
    title: titulo,
    cover: capa?.url,
    address: endereco,
  }
}
