import React from "react";

//components
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import TopServices from "../components/TopServices/TopServices";
import PopularItems from "../components/PopularItems/PopularItems";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TopServices />
      <PopularItems />
    </>
  );
};

export default Home;
