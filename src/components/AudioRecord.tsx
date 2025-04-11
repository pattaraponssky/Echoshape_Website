import React, { useRef, useState } from 'react'
import { Box, Button } from '@mui/material'

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunks = useRef<Blob[]>([])

  const startRecording = async () => {
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
    <Box >
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button
          sx={{
            ...ButtonStyle,
            width: "150px",
            height: "60px",
            "&:hover": {
              background: "linear-gradient(135deg,#003E87,rgb(3, 29, 54))",
            },
          }}
          variant="contained"
          color='primary'
          onClick={startRecording}
          disabled={isRecording}
        >
            Start
        </Button>
        <Button
           sx={{
            ...ButtonStyle,
            width: "150px",
            height: "60px",
            "&:hover": {
              background: "linear-gradient(135deg, #e57373, #d32f2f)",
            },
          }}
          variant="contained"
          color='error'
          onClick={stopRecording}
          disabled={!isRecording}
        >
            Stop
        </Button>
      </Box>

      {audioURL && (
        <Box >
          <audio controls src={audioURL} style={{ width: '100%' }} />
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 3}}>
            <Box>
                <a href={audioURL} download="recording.webm">
                <Button     
                    sx={{
                        ...ButtonStyle,
                        width: "300px",
                        height: "60px",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        background: "linear-gradient(135deg,#870049,rgb(3, 29, 54))",
                        }}
                        >Download Recording</Button>
                    </a>
                </Box>
                <Box>
                    <a href={audioURL} download="recording.webm">
                    <Button     
                    sx={{
                        ...ButtonStyle,
                        width: "300px",
                        height: "60px",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        background: "linear-gradient(135deg,#540087,rgb(3, 29, 54))",
                    }}
                    >Compute</Button>
                    </a>
                </Box>
            </Box>
        </Box>
        
      )}
    </Box>
  )
}

export default AudioRecorder
