import React from "react";

//components
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import TopServices from "../components/TopServices/TopServices";
import PopularItems from "../components/PopularItems/PopularItems";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TopServices />
      <PopularItems />
      <Contact />
    </>
  );
};

export default Home;
