/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, Paper, Popper, Typography } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridComparatorFn,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar,
} from '@mui/x-data-grid'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { memo, useEffect, useRef, useState } from 'react'
import { formatIsoString } from 'services/datesHelper'
import { ProducoesIntelectuaisProps } from 'types/api'
import useWindowSize from 'hooks/useWindowResize'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.locale('pt-br')
dayjs.extend(customParseFormat)
interface GridCellExpandProps {
  value: string
  width: number
}

function isOverflown(element: Element): boolean {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  )
}

const GridCellExpand = memo(function GridCellExpand(
  props: GridCellExpandProps
) {
  const { width, value } = props
  const wrapper = useRef<HTMLDivElement | null>(null)
  const cellDiv = useRef(null)
  const cellValue = useRef(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showFullCell, setShowFullCell] = useState(false)
  const [showPopper, setShowPopper] = useState(false)

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current!)
    setShowPopper(isCurrentlyOverflown)
    setAnchorEl(cellDiv.current)
    setShowFullCell(true)
  }

  const handleMouseLeave = () => {
    setShowFullCell(false)
  }

  useEffect(() => {
    if (!showFullCell) {
      return undefined
    }

    function handleKeyDown(nativeEvent: KeyboardEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [setShowFullCell, showFullCell])

  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: 1,
        height: 1,
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: 1,
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {value}
      </Box>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17, zIndex: 1101 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current!.offsetHeight - 3 }}
          >
            <Typography
              variant="body2"
              style={{ padding: 8, wordWrap: 'break-word' }}
            >
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </Box>
  )
})

function renderCellExpand(params: GridRenderCellParams<string>) {
  return (
    <GridCellExpand
      value={params.value || ''}
      width={params.colDef.computedWidth}
    />
  )
}

export default function IntelectualPage({
  page1,
  page2,
}: ProducoesIntelectuaisProps) {
  const { width } = useWindowSize()
  const isDesktop = (width || 0) > 900

  const bc = {
    Escrita: 'escrita',
    'Resenhas, artigos e ensaios': 'resenhas-artigos-e-ensaios',
  }

  let allRows = page1

  if (page2) {
    allRows = page1?.concat(page2)
  }

  allRows = allRows.sort((a, b) => {
    let aFormatted = dayjs(a.data),
      bFormatted = dayjs(b.data)
    if (!aFormatted.isValid()) {
      let alternateDate = dayjs(a.observacao, 'MM/YYYY')

      alternateDate = alternateDate.isValid()
        ? alternateDate
        : dayjs(a.observacao, 'YYYY')

      aFormatted = alternateDate.isValid()
        ? alternateDate
        : dayjs('01/01/1950', 'DD/MM/YYYY')
    }
    if (!bFormatted.isValid()) {
      let alternateDate = dayjs(b.observacao, 'MM/YYYY')

      alternateDate = alternateDate.isValid()
        ? alternateDate
        : dayjs(b.observacao, 'YYYY')

      bFormatted = alternateDate.isValid()
        ? alternateDate
        : dayjs('01/01/1950', 'DD/MM/YYYY')
    }
    return aFormatted.isAfter(bFormatted) ? -1 : 1
  })

  const dateComparator: GridComparatorFn = (a, b) => {
    return dayjs(a as dayjs.Dayjs).isAfter(b as dayjs.Dayjs) ? 1 : -1
  }

  const cols: GridColDef[] = [
    {
      field: 'col1',
      headerName: 'Título',
      flex: isDesktop ? 3 : undefined,
      renderCell: renderCellExpand,
    },
    {
      field: 'col2',
      headerName: 'Data',
      flex: isDesktop ? 1.5 : undefined,
      renderCell: renderCellExpand,
      sortComparator: dateComparator,
    },
    {
      field: 'col3',
      headerName: 'Autor',
      flex: isDesktop ? 1.3 : undefined,
      renderCell: renderCellExpand,
    },
    {
      field: 'col4',
      headerName: 'Veículo',
      flex: isDesktop ? 1.3 : undefined,
      renderCell: renderCellExpand,
    },
    {
      field: 'col5',
      headerName: 'Tipo',
      flex: isDesktop ? 1 : undefined,
      renderCell: renderCellExpand,
    },
    {
      field: 'col6',
      headerName: 'Obsevação',
      flex: isDesktop ? 2 : undefined,
      renderCell: renderCellExpand,
    },
  ]
  const emptyRows: RowsProps[] = []

  let counter = 1

  allRows?.forEach((row) => {
    const { autor, data, tipo, observacao, titulo, veiculo } = row || {}
    emptyRows.push({
      id: counter,
      col1: titulo,
      col2: formatIsoString(data) || '',
      col3: autor,
      col4: veiculo,
      col5: tipo,
      col6: observacao,
    })
    counter++
  })

  const finalRows = emptyRows as GridRowsProp

  const { width: clientWidth } = useWindowSize() || {}
  const isSmallScreen = clientWidth! <= 900

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>RESENHAS, ARTIGOS E ENSAIOS</NavHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          width: '100%',
          padding: '48px',
          marginBottom: '100px',
        }}
      >
        {isSmallScreen && <p>Visualize em um computador</p>}
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={finalRows}
            columns={cols}
            initialState={{
              sorting: {
                sortModel: [{ field: 'col2', sort: 'desc' }],
              },
            }}
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
        </div>
      </div>
    </>
  )
}

interface RowsProps {
  id: number
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
  col6: string
}
