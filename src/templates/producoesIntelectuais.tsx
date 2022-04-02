import { Container } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import NavDrawer from 'components/navDrawer'
import NavHeader from 'components/navHeader'
import { formatIsoString } from 'services/datesHelper'
import { ProducoesIntelectuaisProps } from 'types/api'

export default function IntelectualPage({
  page1,
  page2,
}: ProducoesIntelectuaisProps) {
  const bc = {
    'Resenhas, artigos e ensaios': 'resenhas-artigos-e-ensaios',
  }

  let allRows

  if (page2) {
    allRows = page1?.concat(page2)
  }

  const cols: GridColDef[] = [
    { field: 'col1', headerName: 'Título', width: 150 },
    { field: 'col2', headerName: 'Data', width: 150 },
    { field: 'col3', headerName: 'Autor', width: 150 },
    { field: 'col4', headerName: 'Veículo', width: 150 },
    { field: 'col5', headerName: 'Tipo', width: 150 },
    { field: 'col6', headerName: 'Obsevação', width: 150 },
  ]
  const emptyRows: RowsProps[] = []

  let counter = 1

  allRows?.forEach((row) => {
    const { autor, data, tipo, observacao, titulo, veiculo } = row
    emptyRows.push({
      id: counter,
      col1: titulo,
      col2: formatIsoString(data),
      col3: autor,
      col4: veiculo,
      col5: tipo,
      col6: observacao,
    })
    counter++
  })

  const finalRows = emptyRows as GridRowsProp

  return (
    <>
      <NavDrawer />
      <NavHeader breadcrumbs={bc}>RESENHAS, ARTIGOS E ENSAIOS</NavHeader>
      <Container>
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid rows={finalRows} columns={cols} />
        </div>
      </Container>
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
