import Link1 from '@mui/material/Link'
import Link2 from 'next/link'
import { ReactNode } from 'react'

export default function Link(props: Props) {
  return (
    <div style={{ cursor: 'pointer' }}>
      <Link2 href="/">
        <Link1 underline="hover" color="inherit">
          {props.children}
        </Link1>
      </Link2>
    </div>
  )
}

type Props = {
  link: string
  children: ReactNode
}
