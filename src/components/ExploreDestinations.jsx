import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDestinations } from "../Util/axiosClient"
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Skeleton,
  Box,
  Container,
} from '@mui/material';

const ExploreDestinations = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['destinations'],
    queryFn: getDestinations,
  });

  if (isPending) {
    return   <Box mt={4}>
      <Typography variant="h5" gutterBottom align='center' sx={{ fontWeight: "900", fontSize: "50px", color: "#00bcd4" }}>
        Explore Most Popular Destinations
      </Typography>
      <Typography variant="body1" gutterBottom align='center' sx={{ mb: 4 }}>
        Plan your perfect trip with our most loved and best-selling <br /> tour packages.
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={i}>
              <Skeleton
                variant="rectangular"
                height={250}
                sx={{ borderRadius: 2, width: "360px"}}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  }

  if (isError) {
    return <Typography color="error">Failed to load destinations.</Typography>;
  }

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom align='center'sx={{fontWeight:"900",fontSize:"50px",color:"#00bcd4"}}>
        Explore Most Popular Destinations
      </Typography>
      <Typography variant="body1" gutterBottom align='center' sx={{mb:4}}>
        Plan your perfect trip with our most loved and best-selling <br/> tour packages.
      </Typography>
      <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent={"center"}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={item._id}>
            <Card sx={{width:"360px"}}>
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: '100%', height: 180, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2">
                  Starting from ₹{item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default ExploreDestinations;
