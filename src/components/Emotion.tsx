import React from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'

interface EmotionBarProps {
  emotion: string
  value: number // ค่าระหว่าง 0 - 100
  color?: string
  emoji?: string
}

const EmotionBar: React.FC<EmotionBarProps> = ({ emotion, value, color, emoji }) => {
  return (
    <Box
      sx={{
        margin: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        boxShadow: 2,
        padding: 0.5,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {/* Emoji + Emotion */}
      <Typography
        sx={{
          fontFamily: 'Prompt',
          fontWeight: 'bold',
          fontSize: '1rem',
          whiteSpace: 'nowrap',
          minWidth: '120px', // กำหนดความกว้างให้ label
        }}
      >
        {emoji} {emotion}
      </Typography>

      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          flexGrow: 1,
          height: 12,
          borderRadius: 6,
          backgroundColor: 'rgba(0,0,0,0.1)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: color || '#1976d2',
            borderRadius: 6,
          },
        }}
      />
    </Box>
  )
}

export default EmotionBar
