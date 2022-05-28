import { Paper, Container, Typography, Grid } from '@mui/material'
// import { useState } from 'react'

const HeroSection = () => {
  // const [image, setImage] = useState(
  //   'https://media.graphassets.com/z8hK7XzHTFulOXlm9ERw'
  // )

  //TODO: intercalar imagens
  // const img1 = 'https://media.graphassets.com/z8hK7XzHTFulOXlm9ERw'
  // const img2 = 'https://media.graphassets.com/I60zy8XYTMmxbBrDncQ1'

  const homeStyle = {
    paper: {
      height: '100vh',
      backgroundImage: `url(${'https://media.graphassets.com/z8hK7XzHTFulOXlm9ERw'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
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
