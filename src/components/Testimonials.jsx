import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";

const testimonials = [
  {
    text: `Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
    name: "Amit Sharma",
    designation: "Marketing Manager, TripWise",
  },
  {
    text: `Placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`,
    name: "Priya Mehta",
    designation: "Travel Blogger, IndiaNomads",
  },
  {
    text: `Demo content used to showcase layout and typography without relying on actual words. Works well for UI mockups.`,
    name: "Rahul Verma",
    designation: "Founder, WanderMore",
  },
];

const Testimonials = () => {
  return (
    <Box mt={3} sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Testimonials
      </Typography>

      <Grid mt={7} container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid mt={4} item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                height: "100%",
                maxWidth:"360px",
                backgroundColor: "#f4f4f4",
                position:"relative"
              }}
            >
              <Avatar sx={{ bgcolor: "#00bcd4", mb: 1,position:"absolute",top:"-50px",width:"100px",height:"100px",fontSize:"50px" }}>
                {testimonial.name[0]}
              </Avatar>
              <Box mt={5}>
              <Typography variant="body2" sx={{ mb: 3, fontStyle: "italic",width:"100%" }}>
                "{testimonial.text}"
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {testimonial.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {testimonial.designation}
              </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
