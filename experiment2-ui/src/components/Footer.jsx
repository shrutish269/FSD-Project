import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', p: 2, mt: 5, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2">
        © 2026 AI Startup. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer