import { Paper, Container, Typography, Grid } from "@mui/material"

  const style = {
    paper: {      
      height: '90vh',
      backgroundImage: 'url(https://www.arthurnestrovski.com.br/wp-content/uploads/2021/02/arthur-3-lq.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    container: {
      height: '100%',
    },
    content: {
      height: '100%',
    }
  }

const HomeContainer = () => {

  return (
    <Paper style={style.paper}>
      <Container style={style.container} >
        <Grid container style={style.content} alignItems="center" justifyContent="center">
          <Grid item>
            <Typography variant="h1">Arthur Nestrovski</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default HomeContainer;