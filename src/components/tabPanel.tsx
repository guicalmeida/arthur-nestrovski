import { Box } from '@mui/material'

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
