import { Box, Button, Typography, Grid } from '@mui/material'
import React from 'react'
import ImageComponent from '../components/Images'

const Home: React.FC = () => {
  return (
<Box>
    <Box sx={{ paddingInline: "11vw", width: "78vw"}}>
      <Typography sx={{ textAlign: "left",color:"#fff" ,fontSize:"7vw", fontFamily: 'Bebas Neue' }}>
        LET YOUR VOICE PAINT THE UNSEEN
      </Typography>

      <Box>
        <Typography sx={{ textAlign: "left", marginTop: 2, fontSize:"1.5rem" , color:"#fff", fontFamily: 'Prompt' }}>
        Transform your voice into stunning Al-generated <br />
        soundscapes and visuals. Our technology makes it <br />
        easy to create immersive audio and visual <br />
        experiences from your recoroings.<br />
        </Typography>
      </Box>

      <Button
        sx={{
          background: "linear-gradient(135deg,rgb(27, 148, 248), #1976d2)",
          boxShadow: 5,
          cursor: "pointer",
          width: "200px",
          height: "50px",
          margin: "10px",
          marginTop: 2,
          color: "white",
          fontFamily: "Prompt",
          fontWeight: "bold",
          borderRadius: "25px",
          "&:hover": {
            background: "linear-gradient(135deg,rgb(27, 148, 248),rgb(3, 29, 54))",
          },
        }}
        variant="contained"
      >
        <Typography variant="h6" sx={{ fontFamily: "Prompt", fontWeight: "bold" }}>
          Get Started
        </Typography>
      </Button>

      <Button
        sx={{
          boxShadow: 5, // เพิ่มให้เหมือนปุ่มแรก
          cursor: "pointer",
          width: "250px",
          height: "50px",
          margin: "10px",
          marginTop: 2,
          backgroundColor: "rgba(0,0,0,0)",
          color: "white",
          fontFamily: "Prompt",
          fontWeight: "bold",
          borderRadius: "25px", // เพิ่มให้เหมือนปุ่มแรก
          border: "1px solid white",
          "&:hover": {
            background: "linear-gradient(135deg,rgb(87, 87, 87),rgb(86, 96, 107))",
          },
        }}
        variant="contained"
      >
        <Typography variant="h6" sx={{ fontFamily: "Prompt", fontWeight: "bold" }}>
          Learn More About
        </Typography>
      </Button>



        <Grid container spacing={4} sx={{alignItems: "center", justifyContent: "center"}}>
          <Box>
            <ImageComponent height={'auto'} width={'100%'} src="./images/image1.png" alt="Image 1" title={''} />
          </Box>
          <Box>
            <ImageComponent height={'auto'} width={'100%'} src="./images/image2.png" alt="Image 2" title={''} />
          </Box>
          <Box>
            <ImageComponent height={'auto'} width={'100%'} src="./images/image3.png" alt="Image 3" title={''} />
          </Box>
          <Box>
            <ImageComponent height={'auto'} width={'100%'} src="./images/image4.png" alt="Image 4" title={''} />
          </Box>
        </Grid>
    </Box>
</Box>
  )
}

export default Home
