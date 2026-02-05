import { Box, Typography, Button } from '@mui/material'

function HeroSection() {
  return (
    <Box
      sx={{
        height: '80vh',
        backgroundColor: '#1976d2',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3">Build Smarter with AI</Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Modern solutions for real-world problems
      </Typography>
      <Button variant="contained" color="secondary">
        Get Started
      </Button>
    </Box>
  )
}

export default HeroSection