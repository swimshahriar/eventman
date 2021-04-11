import React from "react";
import { Heading } from "@chakra-ui/react";

// components
import Card from "../Card/Card";

// assets
import conferenceBG from "../../assets/home/conference_bg.png";
import weedingBG from "../../assets/home/weeding_bg.png";
import fashionShowBG from "../../assets/home/fashion_show_bg.png";

// styles
import "./TopServices.css";

const TopServices = () => {
  return (
    <div className="globalPadding topServices">
      <Heading as="h2" size="2xl" textAlign="center">
        Top Services
      </Heading>
      <div className="topServices__cards">
        <Card text="Conference" imgSrc={conferenceBG} />
        <Card text="Weeding" imgSrc={weedingBG} />
        <Card text="Fashion Show" imgSrc={fashionShowBG} />
      </div>
    </div>
  );
};

export default TopServices;
