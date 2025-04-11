import { Box, Button, Typography, Grid } from '@mui/material'
import React from 'react'
import ImageComponent from '../components/Images'

const Home: React.FC = () => {
  return (
<Box>
    <Box sx={{ paddingInline: "5vw", width: "80vw"}}>
      <Typography sx={{ textAlign: "left",color:"#fff" ,fontSize:"7vw",fontFamily: 'Bebas Neue' }}>
        LET YOUR VOICE PAINT THE UNSEEN
      </Typography>

      <Box>
        <Typography sx={{ textAlign: "left", marginTop: 2, fontSize:"1vw" }}>
          LET YOUR VOICE PAINT THE UNSEEN<br />
          LET YOUR VOICE PAINT THE UNSEEN<br />
          LET YOUR VOICE PAINT THE UNSEEN<br />
          LET YOUR VOICE PAINT THE UNSEEN<br />
          LET YOUR VOICE PAINT THE UNSEEN<br />
          LET YOUR VOICE PAINT THE UNSEEN<br />
        </Typography>
      </Box>

        <Button sx={{ width:"200px", margin:"10px" ,marginTop: 2, backgroundColor: "#FF0000", color: "white", fontFamily: "Prompt", fontWeight: "bold", "&:hover": { backgroundColor: "#FF0000" } }} variant="contained">
            <Typography variant="h6" sx={{ fontFamily: "Prompt", fontWeight: "bold" }}>
                Get Started
            </Typography>
        </Button>

        <Button sx={{ width:"250px", margin:"10px" ,marginTop: 2, backgroundColor: "#FF0000", color: "white", fontFamily: "Prompt", fontWeight: "bold", "&:hover": { backgroundColor: "#FF0000" } }} variant="contained">
            <Typography variant="h6" sx={{ fontFamily: "Prompt", fontWeight: "bold" }}>
                Learn More About
            </Typography>
        </Button>

        <Grid container spacing={4}>
          <Box>
            <ImageComponent height={300} width={'200px'} src="https://i.pinimg.com/736x/f7/3c/65/f73c659b12f3e942f602368f52306f58.jpg" alt="Image 1" title={''} />
          </Box>
          <Box>
            <ImageComponent height={300} width={'200px'} src="https://i.pinimg.com/736x/f7/3c/65/f73c659b12f3e942f602368f52306f58.jpg" alt="Image 1" title={''} />
          </Box>
          <Box>
            <ImageComponent height={300} width={'200px'} src="https://i.pinimg.com/736x/f7/3c/65/f73c659b12f3e942f602368f52306f58.jpg" alt="Image 1" title={''} />
          </Box>
          <Box>
            <ImageComponent height={300} width={'200px'} src="https://i.pinimg.com/736x/f7/3c/65/f73c659b12f3e942f602368f52306f58.jpg" alt="Image 1" title={''} />
          </Box>
        </Grid>
    </Box>
</Box>
  )
}

export default Home
