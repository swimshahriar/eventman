import React from "react";
import { Button, Heading, Image } from "@chakra-ui/react";
import { TiTicket } from "react-icons/ti";
import { useHistory } from "react-router-dom";

// styles
import "./HeroSection.css";

// assets
import HomeHero from "../../assets/home/home_hero.svg";

const HeroSection = () => {
  const history = useHistory();

  return (
    <div className="hero globalPadding marginSection">
      <div className="hero__left" data-aos="fade-right">
        <div className="hero__left-circle circleUp"></div>
        <div className="hero__left-circle circleBottom"></div>
        <Heading as="h2" size="2xl" className="hero__left-heading">
          Let your event <span>Management</span> <br /> Pressure to us
        </Heading>
        <Button
          leftIcon={<TiTicket />}
          size="md"
          className="hero__left-btn"
          onClick={() => history.push("/services")}
        >
          Book Now
        </Button>
      </div>
      <div className="hero__right" data-aos="fade-left">
        <Image src={HomeHero} alt="home hero" />
      </div>
    </div>
  );
};

export default HeroSection;
