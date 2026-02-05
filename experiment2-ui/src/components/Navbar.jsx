import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Startup
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar