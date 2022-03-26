import { CardActions, IconButton } from '@mui/material'
import AppleMusic from 'icons/appleMusic'
import Spotify from 'icons/spotify'
import YoutubeMusic from 'icons/YoutubeMusic'
import { CDUnitProps } from 'types/api'

export default function CDsActionItems({ cD }: CDUnitProps) {
  const { linkEmYoutubeMusic, linkEmAppleMusic, linkEmSpotify } = cD || {}
  const hasActions = linkEmYoutubeMusic ?? linkEmAppleMusic ?? linkEmSpotify
  if (hasActions) {
    return (
      <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: '0' }}>
        {linkEmAppleMusic ? (
          <IconButton
            size="large"
            color="primary"
            href={linkEmAppleMusic}
            target="_blank"
            sx={{ padding: '6px' }}
          >
            <AppleMusic />
          </IconButton>
        ) : null}
        {linkEmSpotify ? (
          <IconButton
            size="large"
            color="primary"
            href={linkEmSpotify}
            target="_blank"
            sx={{ padding: '6px' }}
          >
            <Spotify />
          </IconButton>
        ) : null}
        {linkEmYoutubeMusic ? (
          <IconButton
            size="large"
            color="primary"
            href={linkEmYoutubeMusic}
            target="_blank"
            sx={{ padding: '6px' }}
          >
            <YoutubeMusic />
          </IconButton>
        ) : null}
      </CardActions>
    )
  } else {
    return <span />
  }
}
