import { Grid, Card, CardContent, Typography } from '@mui/material'

function CardComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Fast</Typography>
            <Typography>High performance solutions.</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Secure</Typography>
            <Typography>Enterprise-level security.</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Scalable</Typography>
            <Typography>Grows with your business.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardComponent