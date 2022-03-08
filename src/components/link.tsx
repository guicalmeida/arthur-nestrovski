import Link1 from '@mui/material/Link'
import Link2 from 'next/link'
import { CSSProperties, ReactNode } from 'react'

export default function Link({ style = {}, link, children }: Props) {
  return (
    <div
      style={{
        ...style,
        cursor: 'pointer',
        margin: 'auto',
      }}
    >
      <Link2 href={link} passHref>
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
  style?: CSSProperties
}
