import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";

// assets
import AboutSvg from "../../assets/home/about.svg";

// styles
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="globalPadding about marginSection">
      <Heading as="h2" size="2xl" textAlign="center">
        About Us
      </Heading>
      <div className="detailContainer">
        <Image src={AboutSvg} alt="about us" className="detailContainer-img" />
        <Text className="detailContainer-text" fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos
          deserunt corrupti deleniti dolores pariatur sapiente illo ut sint
          atque ducimus quia sed nulla, libero cumque quasi. Magni, atque
          obcaecati!
        </Text>
      </div>
    </div>
  );
};

export default AboutSection;
