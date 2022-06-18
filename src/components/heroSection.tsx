import { Paper, Container, Typography, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const img1 = 'https://media.graphassets.com/z8hK7XzHTFulOXlm9ERw'
  const img2 = 'https://media.graphassets.com/I60zy8XYTMmxbBrDncQ1'
  const [image, setImage] = useState(img1)

  const homeStyle = {
    paper: {
      height: '100vh',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      borderRadius: 'none',
    },
    container: {
      height: '100%',
    },
    content: {
      height: '100%',
    },
    heroTitle: {
      textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
      color: 'primary.main',
      textTransform: 'uppercase',
    },
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let pic: any
    const updatePic = () => {
      pic =
        !pic &&
        setInterval(() => {
          const nextImage = image === img1 ? img2 : img1
          setImage(nextImage)
        }, 5000)
    }
    updatePic()

    return () => clearInterval(pic)
  }, [image])

  return (
    <Paper sx={homeStyle.paper}>
      <Container sx={homeStyle.container}>
        <Grid
          container
          sx={homeStyle.content}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h2" component="h1" sx={homeStyle.heroTitle}>
              Arthur Nestrovski
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default HeroSection
