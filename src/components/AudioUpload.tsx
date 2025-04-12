import { Box, Typography, Button, Paper } from '@mui/material'
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
    boxShadow: 3,
    cursor: 'pointer',
    marginTop: 2,
    color: 'white',
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: '25px',
    paddingX: 3,
    paddingY: 1,
    background: 'linear-gradient(135deg,#0b3d20,#1e5631)',
    '&:hover': {
      background: 'linear-gradient(135deg,#1e5631,#0b3d20)',
    },
  }

  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg,rgb(3, 29, 54),rgb(76, 9, 63))',
        padding: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 2,
          borderRadius: 4,
          width: '100%',
          backgroundColor: '#ffffff10',
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            fontFamily: 'Prompt',
            textAlign: 'start',
          }}
        >
          Upload & Play Audio
        </Typography>

        {/* ปุ่ม Upload + ปุ่มใหม่ */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained" component="label" sx={ButtonStyle}>
          📁 Upload Audio File
            <input
              type="file"
              accept="audio/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>

          {audioSrc && (
            <Button
              variant="contained"
              sx={{
                ...ButtonStyle,
                background: 'linear-gradient(135deg,#540b0e,#9e2a2b)',
                '&:hover': {
                  background: 'linear-gradient(135deg,#9e2a2b,#540b0e)',
                },
              }}
              onClick={() => {
                console.log('You clicked the extra button!')
                // ใส่ logic เพิ่มได้ตามต้องการ
              }}
            >
              ดำเนินการต่อ
            </Button>
          )}
        </Box>


        {audioSrc && (
          <Box sx={{ marginTop: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: 'Prompt', mb: 1, color: '#fff' }}
            >
              Preview:
            </Typography>
            <audio controls src={audioSrc} style={{ width: '100%' }} />
          </Box>
        )}
      </Paper>
      
      <Box sx={{backgroundColor:'rgb(255,255,255,0.8)',width:"100%",mt: 2,borderRadius:4,
          padding: 2,
          textAlign: 'start',
          backdropFilter: 'blur(10px)',}}>
          <Typography variant="h6" sx={{ fontFamily: 'Prompt'}}>
            Test TexT Test TexT Test TexT Test TexT Test TexT Test TexT Test<br/>
            Test TexT Test TexT Test TexT<br/>
            Test TexT Test TexT Test TexT<br/>
            Test TexT Test TexT Test TexT<br/>
            Test TexT Test TexT Test TexT<br/>
          </Typography>
      </Box>
    </Box>
    
  )
}

export default AudioUpload
