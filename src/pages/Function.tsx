import React, { useState } from 'react'
import { Box, Typography, Tabs, Tab, Paper } from '@mui/material'
import AudioRecorder from '../components/AudioRecord'
import AudioUpload from '../components/AudioUpload'
import ImageComponent from '../components/Images'
import EmotionBar from '../components/Emotion'

const Function: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const emotionData = {
    anger: 0.0008013580227270722,
    frustration: 0.01127973198890686,
    happiness: 0.000264557747868821,
    neutral: 0.0003968563105445355,
    sadness: 0.9872574210166931
  }
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue)
  }

  return (
    <Box sx={{ marginTop: '15px', paddingInline: '11vw', width: '78vw' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          marginBottom: 3,
          color: '#fff',
          fontFamily: 'Prompt',
        }}
      >
        Record or upload an audio file to analyze and generate AI image
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* LEFT SIDE - Tabs with content */}
        <Box sx={{ width: { xs: '100%', md: '60%' } }}>
          <Paper
            elevation={6}
            sx={{
              backgroundColor: '#ffffff10',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              overflow: 'hidden',
              paddingBottom: 2,
              fontFamily: 'Prompt'
            }}
          >
            {/* Tab headers */}
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              centered
              sx={{
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Tab label="Record Audio" />
              <Tab label="Upload Audio" />
            </Tabs>

            {/* Tab content */}
            <Box>
              {tabIndex === 0 && <AudioRecorder />}
              {tabIndex === 1 && <AudioUpload />}
            </Box>
          </Paper>
        </Box>

        {/* RIGHT SIDE - Placeholder or result display */}
   
          <Box
            sx={{
              backgroundColor: 'rgb(0, 0, 0, 0.3)',
              borderRadius: '10px',
              minHeight: '75vh',
              boxShadow: 3,
              width: { xs: '100%', md: '40%' },
            }}
          >
            {/* วางเนื้อหาผลลัพธ์ที่ได้จากเสียงที่แปลงตรงนี้ */}
        
            <ImageComponent height={'250px'} width={'100%'} src="./images/image1.png" alt="Image 1" title={''} />
            <Box sx={{ mt: 4, maxWidth: '100%', marginInline:"10px"}}>
                <EmotionBar emoji="😠" emotion="Anger" value={emotionData.anger * 100} color="#d32f2f" />
                <EmotionBar emoji="😤" emotion="Frustration" value={emotionData.frustration * 100} color="#ff9800" />
                <EmotionBar emoji="😊" emotion="Happiness" value={emotionData.happiness * 100} color="#fbc02d" />
                <EmotionBar emoji="😐" emotion="Neutral" value={emotionData.neutral * 100} color="#9e9e9e" />
                <EmotionBar emoji="😢" emotion="Sadness" value={emotionData.sadness * 100} color="#1565c0" />
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default Function
