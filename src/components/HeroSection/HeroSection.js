import React from "react";
import { Button, Heading, Image } from "@chakra-ui/react";
import { TiTicket } from "react-icons/ti";

// styles
import "./HeroSection.css";

// assets
import HomeHero from "../../assets/home/home_hero.svg";

const HeroSection = () => {
  return (
    <div className="hero globalPadding marginSection">
      <div className="hero__left">
        <div className="hero__left-circle circleUp"></div>
        <div className="hero__left-circle circleBottom"></div>
        <Heading as="h2" size="2xl" className="hero__left-heading">
          Let your event <span>Management</span> <br /> Pressure to us
        </Heading>
        <Button leftIcon={<TiTicket />} size="md" className="hero__left-btn">
          Book Now
        </Button>
      </div>
      <div className="hero__right">
        <Image src={HomeHero} alt="home hero" />
      </div>
    </div>
  );
};

export default HeroSection;
