import { Box, Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const AudioUpload: React.FC = () => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAudioSrc(url)
    }
  }

  const ButtonStyle = {
    boxShadow: 5,
    cursor: "pointer",
    margin: "10px",
    marginTop: 2,
    color: "white",
    fontFamily: "Prompt",
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderRadius: "25px",
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold',marginBottom: 3,color:"#fff", fontFamily: 'Prompt' }}
      >
        Upload & Play Audio
      </Typography>

      <Button sx={{...ButtonStyle,
        background: "linear-gradient(135deg,#003E87,#870049)",
         "&:hover": {
            background: "linear-gradient(135deg,rgb(27, 148, 248),#870049)",
          },
            width: "300px",
            height: "60px",
      }} variant="contained" component="label">
        Upload Audio File
        <input
          type="file"
          accept="audio/*"
          hidden
          onChange={handleFileChange}
        />
      </Button>

      {audioSrc && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Prompt', mb: 1 }}>
            Preview:
          </Typography>
          <audio controls src={audioSrc} style={{ width: '100%' }} />
        </Box>
      )}
    </Box>
  )
}

export default AudioUpload
