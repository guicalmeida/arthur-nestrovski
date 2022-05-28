import { IconButton } from '@mui/material'
import { ReactNode } from 'react'

export default function CustomizedIcon({ children, linkUrl }: IconProps) {
  if (linkUrl) {
    return (
      <IconButton
        size="large"
        color="primary"
        href={linkUrl}
        target="_blank"
        sx={{ padding: '8px' }}
      >
        {children}
      </IconButton>
    )
  } else {
    return <></>
  }
}

interface IconProps {
  children: ReactNode
  linkUrl?: string
}
