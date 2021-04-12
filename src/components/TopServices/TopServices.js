import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { TiTicket } from "react-icons/ti";

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
    <div className="globalPadding topServices marginSection">
      <Heading as="h2" size="2xl" textAlign="center">
        Top Services
      </Heading>
      <div className="cards">
        <Card text="Conference" imgSrc={conferenceBG} />
        <Card text="Weeding" imgSrc={weedingBG} />
        <Card text="Fashion Show" imgSrc={fashionShowBG} />
      </div>
      <Button leftIcon={<TiTicket />} size="md" className="cards__btn">
        Book Now
      </Button>
    </div>
  );
};

export default TopServices;
