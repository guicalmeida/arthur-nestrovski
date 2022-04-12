import { Typography } from '@mui/material'

const MostRecent = ({ publisher, title, year }: Props) => {
  return (
    <>
      <Typography gutterBottom color="text.primary">
        Mais recente:
      </Typography>
      <Typography>
        {title && (
          <span style={{ fontWeight: 600, fontSize: '20px' }}>{title}</span>
        )}
        {year && (
          <span>
            <br />
            {year}
          </span>
        )}
        {publisher && (
          <span>
            <br />
            {publisher}
          </span>
        )}
      </Typography>
    </>
  )
}

interface Props {
  title?: string
  year?: number | string
  publisher?: string
}

export default MostRecent
