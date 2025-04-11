import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'

const TextStayle = {
  fontFamily: 'Prompt',
}

// const BoxStyle = {
//   margin: "auto",
//   padding: "20px",
//   backgroundColor: "white",
//   borderRadius: "10px",
//   boxShadow: 3,
// }

const Contact: React.FC = () => {
  return (
    <Box sx={{ fontFamily: "Prompt" }}>

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "10px", fontFamily: "Prompt", textAlign: "center", color: "#fff" }}
      >
        Contact Us
      </Typography>

      <Box
        sx={{
          fontFamily: "Prompt",
          maxWidth: "80vw",
          minHeight: "60vh",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: 3,
          mt: 5,
          display: 'flex', // ใช้ flexbox
          flexDirection: { xs: 'column', md: 'row' }, // จัดเรียงในแนวตั้งบนมือถือ และในแนวนอนบนหน้าจอใหญ่
        }}
      >

        {/* ฝั่งซ้าย */}
        <Box
          sx={{
            boxShadow: 3,
            width: { xs: '100%', md: '40%' },
            maxHeight: '100%',
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" sx={{ ...TextStayle, mb: 1 }}>บริษัท Ecoshape</Typography>
          <Typography variant="body1" sx={{ ...TextStayle }}>123 ถนนสุขุมวิท, เขตบางนา, กรุงเทพฯ 10260</Typography>
          <Typography variant="body1" sx={{ ...TextStayle, mt: 2 }}>อีเมล: contact@ecos.com</Typography>
          <Typography variant="body1" sx={{ ...TextStayle }}>โทร: 02-123-4567</Typography>
          <Typography variant="body1" sx={{ ...TextStayle }}>Line: @ecos</Typography>
        </Box>

        {/* ฝั่งขวา */}
        <Box
          sx={{

            width: { xs: '100%', md: '60%' },
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* แบ่งเป็น 2 คอลัมน์ */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{  width: { xs: '100%', md: '60%' } }}>
              <TextField
                label="First Name"
                variant="standard"
                placeholder="Please enter your first name"
                fullWidth
              />
            </Box>
            <Box sx={{  width: { xs: '100%', md: '60%' } }}>
              <TextField
                label="Last Name"
                variant="standard"
                placeholder="Please enter your last name"
                fullWidth
              />
            </Box>
          </Box>
          

          <Box sx={{ display: 'flex', gap: 2 }}>
            
          <TextField
            label="Email"
            type="email"
            variant="standard"
            placeholder="Please enter your email"
            fullWidth
            />
          <TextField
            label="Phone Number"
            type="tel"
            variant="standard"
            placeholder="Please enter your phone number"
            fullWidth
            />
            </Box>
          <TextField
            label="Message"
            helperText="Please enter your message"
            variant="standard"
            placeholder="Write your message"
            multiline
            rows={4}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ alignSelf: 'flex-start', mt: 2 }}
          >
            ส่งข้อความ
          </Button>
        </Box>

      </Box>

    </Box>
  )
}

export default Contact
