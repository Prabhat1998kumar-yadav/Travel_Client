import React from 'react'
import {Container} from "@mui/material";
import ExploreDestinations from '../components/ExploreDestinations';
import TopSellingPackages from '../components/TopSellingPackages';
import HeroSection from '../components/HeroSections';
import OurAdvantages from '../components/OurAdvantages';
import Testimonials from '../components/Testimonials';
function HomePage() {
  return (
  <Container maxWidth={false}>
    <HeroSection/>
    <ExploreDestinations />
    <OurAdvantages/>
    <TopSellingPackages />
    <Testimonials/>
  </Container>
  )
}

export default HomePage