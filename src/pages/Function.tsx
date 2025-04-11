import { Box, Typography } from '@mui/material'
import React from 'react'

const Function: React.FC = () => {
  return (
    <Box sx={{ padding: "20px", maxWidth: "100%", margin: "auto", backgroundColor: "white", borderRadius: "10px", boxShadow: 3 }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", fontFamily: "Prompt" }}>
      Function
    </Typography>
  </Box>
  )
}

export default Function
