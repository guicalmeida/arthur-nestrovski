import { Breadcrumbs, Typography } from '@mui/material'
import Link from './link'

export default function CustomBreadcrumbs({ breadcrumbs }: Props) {
  let wholeLink = ''
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link link="/" underline={true}>
        Página inicial
      </Link>
      {Object.entries(breadcrumbs).map((item, i, arr) => {
        const isCurrentPage = arr.length - 1 === i
        wholeLink = wholeLink + `/${item[1]}`

        if (!isCurrentPage) {
          return (
            <Link underline={true} link={wholeLink} key={wholeLink}>
              {item[0]}
            </Link>
          )
        } else {
          return (
            <Typography color="text.primary" key={wholeLink}>
              {item[0]}
            </Typography>
          )
        }
      })}
    </Breadcrumbs>
  )
}

interface Props {
  breadcrumbs: {
    [index: string]: string
  }
}
