import React from "react";
import { Heading } from "@chakra-ui/react";

// components
import Card from "../Card/Card";

// assets
import ledWall from "../../assets/home/led_wall.png";
import projector from "../../assets/home/projector.png";
import soundSystem from "../../assets/home/sound_system.png";

// styles
import "./PopularItems.css";

const PopularItems = () => {
  return (
    <div className="globalPadding popularItems marginSection">
      <Heading as="h2" size="2xl" textAlign="center">
        Popular Items
      </Heading>
      <div className="cards">
        <Card text="Led Wall Screen" imgSrc={ledWall} num="1" />
        <Card text="Projector" imgSrc={projector} num="2" />
        <Card text="Sound System" imgSrc={soundSystem} num="3" />
      </div>
    </div>
  );
};

export default PopularItems;
