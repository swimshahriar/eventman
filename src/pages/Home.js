import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import TopServices from "../components/TopServices/TopServices";
import PopularItems from "../components/PopularItems/PopularItems";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const { hash } = useLocation();

  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    if (hash === "#about") {
      aboutRef.current.scrollIntoView();
    } else if (hash === "#contact") {
      contactRef.current.scrollIntoView();
    }
  }, [hash]);

  return (
    <>
      <HeroSection />
      <div ref={aboutRef}></div>
      <AboutSection />
      <TopServices />
      <PopularItems />
      <div ref={contactRef}></div>
      <Contact />
    </>
  );
};

export default Home;
