import { Paper, Container, Typography, Grid } from '@mui/material'

const homeStyle = {
  paper: {
    height: '90vh',
    backgroundImage:
      'url(https://www.arthurnestrovski.com.br/wp-content/uploads/2021/02/arthur-3-lq.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

const HeroSection = () => {
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
