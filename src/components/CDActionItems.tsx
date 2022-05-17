import { CardActions, IconButton } from '@mui/material'
import AmazonMusic from 'icons/AmazonMusic'
import AppleMusic from 'icons/appleMusic'
import Deezer from 'icons/Deezer'
import Spotify from 'icons/spotify'
import Tidal from 'icons/Tidal'
import YoutubeMusic from 'icons/YoutubeMusic'
import { ReactNode } from 'react'
import { CDUnitProps } from 'types/api'

function CustomizedIcon({ children, linkUrl }: IconProps) {
  if (linkUrl) {
    return (
      <IconButton
        size="large"
        color="primary"
        href={linkUrl}
        target="_blank"
        sx={{ padding: '12px' }}
      >
        {children}
      </IconButton>
    )
  } else {
    return <></>
  }
}

export default function CDsActionItems({ cD }: CDUnitProps, showAll = false) {
  const {
    linkEmYoutubeMusic,
    linkEmAppleMusic,
    linkEmSpotify,
    linkEmAmazonMusic,
    linkEmDeezer,
    linkEmTidal,
  } = cD || {}
  const hasActions = linkEmYoutubeMusic ?? linkEmAppleMusic ?? linkEmSpotify
  if (hasActions) {
    return (
      <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: '0' }}>
        {linkEmAppleMusic ? (
          <CustomizedIcon linkUrl={linkEmAppleMusic}>
            <AppleMusic />
          </CustomizedIcon>
        ) : null}
        {linkEmSpotify ? (
          <CustomizedIcon linkUrl={linkEmSpotify}>
            <Spotify />
          </CustomizedIcon>
        ) : null}
        {linkEmYoutubeMusic ? (
          <CustomizedIcon linkUrl={linkEmYoutubeMusic}>
            <YoutubeMusic />
          </CustomizedIcon>
        ) : null}
        {showAll && (
          <>
            {linkEmTidal ? (
              <CustomizedIcon linkUrl={linkEmTidal}>
                <Tidal />
              </CustomizedIcon>
            ) : null}
            {linkEmAmazonMusic ? (
              <CustomizedIcon linkUrl={linkEmAmazonMusic}>
                <AmazonMusic />
              </CustomizedIcon>
            ) : null}
            {linkEmDeezer ? (
              <CustomizedIcon linkUrl={linkEmDeezer}>
                <Deezer />
              </CustomizedIcon>
            ) : null}
          </>
        )}
      </CardActions>
    )
  } else {
    return <></>
  }
}

interface IconProps {
  children: ReactNode
  linkUrl?: string
}
