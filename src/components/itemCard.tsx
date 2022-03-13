import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import AppleMusic from 'icons/appleMusic'
import Spotify from 'icons/spotify'
import YoutubeMusic from 'icons/YoutubeMusic'
import Link from 'next/link'
import { getShortDescription } from 'services/shortDescriptionHelper'
import { CDProps, CDUnitProps, DVDProps, LivroProps } from 'types/api'
import universalSlugify from 'services/slugifyHelper'

const StyledCard = styled(Card)`
  transition: all 0.2s ease-in-out;
  max-width: 320px;
  margin: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
`

const HoverOverlay = styled(Box)`
  transition: all 0.2s ease-in-out;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: #00000058;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 1;
    cursor: pointer;

    & + img {
      transition: all 0.2s ease-in-out;
      filter: blur(3px) grayscale(40%);
    }
  }
`

const CDsActionItems = ({ cD }: CDUnitProps) => {
  const { linkEmYoutubeMusic, linkEmAppleMusic, linkEmSpotify } = cD || {}
  const hasActions = linkEmYoutubeMusic ?? linkEmAppleMusic ?? linkEmSpotify
  if (hasActions) {
    return (
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        {linkEmAppleMusic ? (
          <IconButton
            size="large"
            color="primary"
            href={linkEmAppleMusic}
            target="_blank"
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

export default function ItemCard({ dvds, cDs, livros, breadcrumbs }: Props) {
  const items = livros || cDs || dvds
  const sortedItems = items?.sort((a, b) => {
    return a?.ano?.ano > b?.ano?.ano ? -1 : 1
  })
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {sortedItems?.map((item) => {
          const shortDesc = getShortDescription(item?.descricao?.html)
          const slug = universalSlugify(item?.titulo)
          const url = `/${Object.values(breadcrumbs).join('/')}/${slug}`
          return (
            <Grid item key={slug}>
              <StyledCard>
                <Link href={url} passHref>
                  <a>
                    <div style={{ position: 'relative' }}>
                      <HoverOverlay>
                        <Button variant="outlined" size="large">
                          Ver
                        </Button>
                      </HoverOverlay>
                      <CardMedia
                        component="img"
                        image={item?.capa?.url}
                        className="cardImage"
                      />
                    </div>
                  </a>
                </Link>
                <div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      color="text.secondary"
                    >
                      {item?.titulo}
                    </Typography>
                    <Typography variant="body2">{shortDesc}</Typography>
                  </CardContent>
                  {cDs ? <CDsActionItems cD={item as CDProps} /> : null}
                </div>
              </StyledCard>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

interface Props {
  cDs?: CDProps[]
  livros?: LivroProps[]
  dvds?: DVDProps[]
  breadcrumbs: {
    [index: string]: string
  }
}
