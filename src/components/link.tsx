import Link1 from '@mui/material/Link'
import Link2 from 'next/link'
import { CSSProperties, ReactNode } from 'react'

export default function Link({
  style = {},
  underline = true,
  link,
  children,
}: Props) {
  return (
    <div
      style={{
        ...style,
        cursor: 'pointer',
      }}
    >
      <Link2 href={link} passHref>
        <Link1 underline={underline ? 'hover' : 'none'} color="inherit">
          {children}
        </Link1>
      </Link2>
    </div>
  )
}

type Props = {
  link: string
  underline?: boolean
  children: ReactNode
  style?: CSSProperties
}
