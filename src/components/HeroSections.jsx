import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';


const HeroSection = () => {
  return (
    <Box mt={1}
      sx={{
        width: '100%',
        minHeight: '100vh',        
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url("https://images.unsplash.com/photo-1529171696861-bac785a44828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJ8ZW58MHx8MHx8fDA%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',     
        px: 10,
        py: 6,
        position:"relative"
      }}
    >
      <Box mt={4} sx={{ maxWidth: 900, color: '#fff'}}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: 'left',fontSize:"80px" }}
        >
          Discover Your Next Adventure
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 4, textAlign: 'left',fontSize:"28px" }}
        >
          Choose from our curated experiences, customized for every kind of traveler.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            width:"200px",
            backgroundColor: '#00bcd4',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize:"22px",
            color:"black",
            backgroundColor:"yellow",
            px: 4,
            py: 1,
            mb: 6,
            '&:hover': {
              backgroundColor: '#0097a7',
            },
          }}
        >
          Book Now
        </Button>
        
        <Box 
          sx={{
            position:"absolute",
            bottom:0,
            left:"10px",
            color:"#fff",
            background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))`,
            padding:"10px"
            
          }}
        >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">              
              <Typography fontWeight="bold" mt={1} sx={{fontSize:"25px"}}>
                Easy Booking
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">              
              <Typography fontWeight="bold" mt={1} sx={{fontSize:"25px",borderLeft:"2px solid #fff",paddingLeft:"10px"}}>
                Curated Destinations
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">              
              <Typography fontWeight="bold" mt={1} sx={{fontSize:"25px",borderLeft:"2px solid #fff",paddingLeft:"10px"}}>
                Trusted Support
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
