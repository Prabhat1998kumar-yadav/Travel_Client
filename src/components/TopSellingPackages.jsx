import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTopPackages } from "../Util/axiosClient";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Skeleton,
  Box,
  Button,
  Container,
} from '@mui/material';

const TopSellingPackages = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['topPackages'],
    queryFn: getTopPackages,
  });

  if (isPending) {
     return   <Box mt={4}>
          <Typography variant="h5" gutterBottom align='center' sx={{ fontWeight: "900", fontSize: "50px", color: "#00bcd4" }}>
            Top Selling Tour Packages of India
          </Typography>
          <Typography variant="body1" gutterBottom align='center' sx={{ mb: 4 }}>
             Stay updated with our latest news and happenings through <br/> Informe.
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
    return <Typography color="error">Failed to load packages.</Typography>;
  }

  return (
    <Box mt={6}>
      <Typography variant="h5" gutterBottom align='center' sx={{fontWeight:"900",fontSize:"50px",color:"#00bcd4"}}>
        Top Selling Tour Packages of India
      </Typography>
      <Typography variant="body1" gutterBottom align='center' sx={{mb:4}}>
              Stay updated with our latest news and happenings through <br/> Informe.
      </Typography>
      <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent={"center"}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card sx={{width:"360px"}}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: '100%', height: 180, objectFit: 'cover' }}
              />
              <CardContent sx={{textAlign:"center"}}>
                <Typography variant="h6">{item.title}</Typography>
                <Button
                    variant="contained"
                    size="small"
                    sx={{ alignSelf: 'flex-start', mt: 1,backgroundColor:"#00bcd4", width:"90%",textTransform:"none",fontWeight:"700"}}
                > View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default TopSellingPackages;
