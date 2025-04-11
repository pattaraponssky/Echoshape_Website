import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'

const TextStayle = {
  fontFamily: 'Prompt',
  fontWeight:'bold',
  color:"#fff"
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
        variant="h3"
        sx={{ fontWeight: "bold", marginTop: "20px", fontFamily: "Prompt", textAlign: "center", color: "#fff" }}
      >
        Contact Us
      </Typography>

      <Box
        sx={{
          fontFamily: "Prompt",
          maxWidth: "70vw",
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
            width: { xs: '100%', md: '45%' },
            maxHeight: '100%',
            padding: "20px",
            borderRadius: "10px",
            // backgroundColor: "#f5f5",
            backgroundImage: "url('./images/contact.png')",
            margin: "20px",
          }}
        >
          <Typography variant="h4" sx={{ ...TextStayle}}>Contact Information</Typography>
          <Typography variant="h6" sx={{ ...TextStayle}}>Say something to start a live chat!</Typography>
          <Typography variant="h6" sx={{ ...TextStayle, mt: 5 }}>demo@gmail.com</Typography>
          <Typography variant="h6" sx={{ ...TextStayle, mt: 1 }}>+66 80 176 9409</Typography>
          <Typography variant="h6" sx={{ ...TextStayle, mt: 1 }}>Bangkok University</Typography>
        </Box>

        {/* ฝั่งขวา */}
        <Box
          sx={{
            width: { xs: '100%', md: '55%' },
            padding: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* แบ่งเป็น 2 คอลัมน์ */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{  width: { xs: '100%', md: '50%' } }}>
              <TextField
                label="First Name"
                variant="standard"
                placeholder="Please enter your first name"
                fullWidth
              />
            </Box>
            <Box sx={{  width: { xs: '100%', md: '50%' } }}>
              <TextField
                label="Last Name"
                variant="standard"
                placeholder="Please enter your last name"
                fullWidth
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{  width: { xs: '100%', md: '50%' } }}>
                <TextField
                  label="Email"
                  type="email"
                  variant="standard"
                  placeholder="Please enter your email"
                  fullWidth
                />
              </Box>
              <Box sx={{  width: { xs: '100%', md: '50%' } }}>
                <TextField
                  label="Phone Number"
                  type="tel"
                  variant="standard"
                  placeholder="Please enter your phone number"
                  fullWidth
                  />
              </Box>
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
            sx={{ alignSelf: 'flex-end', mt: 2 ,backgroundColor:"black",
              fontWeight:'bold',borderRadius:'5px',color:"#fff",}}
          >
            Send Message
          </Button>
        </Box>

      </Box>

    </Box>
  )
}

export default Contact
