import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";

import FeaturedSarees from "../FeaturedSarees/FeaturedSarees";
import HomeSections from "../HomeSections/HomeSections";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../../../Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <FeaturedSarees />
      <HomeSections />
      <AboutUs />
     
      
    </>
  );
};

export default Home;