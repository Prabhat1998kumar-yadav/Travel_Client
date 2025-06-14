import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { FaClock, FaMoneyBillWave, FaHandshake, FaListAlt } from 'react-icons/fa';

const advantages = [
  {
    title: 'Save Time',
    description: 'No more switching for packages or plans.',
    icon: <FaClock size={50} color="#00bcd4"/>,
  },
  {
    title: 'Save Money',
    description: 'Compare, negotiate, and choose the best.',
    icon: <FaMoneyBillWave size={50} color="#00bcd4" />,
  },
  {
    title: 'Trusted Network',
    description: 'A Trusted Network of 7000+ Travel Agents.',
    icon: <FaHandshake size={50} color="#00bcd4" />,
  },
  {
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips from Trusted Agents.',
    icon: <FaListAlt size={50} color="#00bcd4" />,
  },
];

const OurAdvantages = () => {
  return (

    <Box mt={3} sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: 'rgb(72, 222, 233)',color:"#fff" }}>
    
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{fontSize:"60px"}}>
        Our Advantages
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
        You can rely on our experience and the quality of services we provide.  
        Here are other reasons to book tours at Treat Holidays.
      </Typography>

      <Grid container spacing={4} justifyContent={"center"}>
        {advantages.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={0} sx={{ width:"200px",p: 4, textAlign: 'center', borderRadius: 2 ,background:"transparent",color:"#fff"}}>
              <Box
                sx={{                    
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',          
                    backgroundColor: 'white',     
                    display: 'flex',              
                    alignItems: 'center',
                    justifyContent: 'center',                    
                    mx: 'auto',                  
                    mb: 2,
                }}
                >
                {item.icon}
             </Box>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurAdvantages;
