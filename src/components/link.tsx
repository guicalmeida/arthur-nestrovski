import Link1 from '@mui/material/Link'
import Link2 from 'next/link'
import { ReactNode } from 'react'

export default function Link({ link, children }: Props) {
  return (
    <div style={{ cursor: 'pointer', width: 'fit-content', margin: 'auto' }}>
      <Link2 href={link}>
        <Link1 underline="hover" color="inherit">
          {children}
        </Link1>
      </Link2>
    </div>
  )
}

type Props = {
  link: string
  children: ReactNode
}
