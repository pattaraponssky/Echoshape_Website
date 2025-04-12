import React, { useRef, useState } from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunks = useRef<Blob[]>([])

  const startRecording = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      alert('Your browser does not support audio recording.')
      return
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const mediaRecorder = new MediaRecorder(stream)
    mediaRecorderRef.current = mediaRecorder
    audioChunks.current = []

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.current.push(event.data)
      }
    }

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' })
      const url = URL.createObjectURL(audioBlob)
      setAudioURL(url)
    }

    mediaRecorder.start()
    setIsRecording(true)
  }

  const stopRecording = () => {
    mediaRecorderRef.current?.stop()
    setIsRecording(false)
  }

  const ButtonStyle = {
    boxShadow: 3,
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    fontSize: '1rem',
    borderRadius: '25px',
    px: 4,
    py: 1.5,
  }

  return (
    <Box
      sx={{
        minHeight: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg,rgb(3, 29, 54),rgb(76, 9, 44))',
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
          sx={{
            fontSize:"1.4rem",
            fontWeight: 'bold',
            color: '#fff',
            fontFamily: 'Prompt',
            textAlign: 'start',
          }}
        >
          Audio Recorder
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          <Button
            variant="contained"
            disabled={isRecording}
            onClick={startRecording}
            sx={{
              backdropFilter: 'blur(30px)',
              ...ButtonStyle,
              background: 'linear-gradient(135deg,#003E87,#870049)',
              '&:hover': {
                background: 'linear-gradient(135deg,rgb(27, 148, 248),#870049)',
              },
            }}
          >
            Start
          </Button>

          <Button
            variant="contained"
            disabled={!isRecording}
            onClick={stopRecording}
            sx={{
              ...ButtonStyle,
              background: 'linear-gradient(135deg,#e57373,#d32f2f)',
              '&:hover': {
                background: 'linear-gradient(135deg,#f44336,#b71c1c)',
              },
            }}
          >
            Stop
          </Button>
        </Box>

        {audioURL && (
          <>
            <Box display="flex" justifyContent="center" mb={2}>
              <audio controls src={audioURL} style={{ width: '100%' }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <a href={audioURL} download="recording.webm">
                <Button
                  sx={{
                    ...ButtonStyle,
                    width: '250px',
                    background: 'linear-gradient(135deg,#870049,#031d36)',
                    '&:hover': {
                      background: 'linear-gradient(135deg,#a01a66,#000d1a)',
                    },
                  }}
                >
                  Download
                </Button>
              </a>

              <Button
                sx={{
                  ...ButtonStyle,
                  width: '200px',
                  background: 'linear-gradient(135deg,#064420,#021e10)',
                  '&:hover': {
                    background: 'linear-gradient(135deg,#0b5d34,#013b1f)',
                  },
                }}
                onClick={() => {
                  alert('Send recording clicked! (คุณสามารถเขียนฟังก์ชันส่ง API ได้ที่นี่)')
                }}
              >
                Send Record
              </Button>
            </Box>
          </>
        )}
      </Paper>
      <Box sx={{backgroundColor:'rgb(255,255,255,0.8)',width:"100%",mt: 2,borderRadius:4,
         padding: 2,
        textAlign: 'start',
        backdropFilter: 'blur(10px)',}}>
      <Typography
          sx={{
            fontSize:"1.5rem",
            fontWeight: 'bold',
            color: '#000',
            fontFamily: 'Prompt',
            textAlign: 'start',
          }}
        >
          Live Script
        </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'Prompt',overflowY:"auto",height:"200px" }}>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </Typography>
        </Box>
    </Box>
  )
}

export default AudioRecorder
