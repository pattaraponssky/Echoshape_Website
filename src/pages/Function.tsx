import { Box, Typography } from '@mui/material'
import React from 'react'
import AudioRecorder from '../components/AudioRecord'
import AudioUpload from '../components/AudioUpload'

const Function: React.FC = () => {
  return (
    <Box sx={{marginTop:"15px",paddingInline: "11vw", width: "78vw"}}>
      <Typography
              variant="h4"
              sx={{ fontWeight: 'bold',marginBottom: 3,color:"#fff", fontFamily: 'Prompt' }}
            >
              Record or upload an audio file to analyze and generate AI image 
      </Typography>

   
    <Box sx={{display: "flex", gap: 2, flexDirection: { xs: 'column', md: 'row' }}}>
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
        }}>

      <Box sx={{
         width: "100%",
         boxShadow: 3,
         borderRadius: "10px",
        backgroundColor: "white",}}>
          <AudioRecorder />
      </Box>

      <Box sx={{
        width: "100%",
        boxShadow: 3,
        borderRadius: "10px",
        backgroundColor: "#333",}}>
          <AudioUpload />
      </Box>

      <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            minHeight: "10%",
            boxShadow: 3,
            width: { xs: '100%', md: '100%' },
          }}>
      </Box>

      </Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            minHeight: "80vh",
            boxShadow: 3,
            width: { xs: '100%', md: '40%' },
          }}>
        </Box>

        
      </Box>
      
    </Box>
  )
}

export default Function
