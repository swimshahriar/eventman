import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";

// assets
import contactBG from "../../assets/home/contact_bg.png";

// styles
import "./Contact.css";

const Contact = () => {
  return (
    <div className="globalPadding about marginSection" id="contact">
      <Heading as="h2" size="2xl" textAlign="center">
        Contact Us
      </Heading>
      <div className="detailContainer">
        <Text className="detailContainer-text" fontSize="xl">
          <span>Address:</span> Bashundhara R/A <br />
          <span>Email:</span> contact@eventman.com <br />
          <span>Phone:</span> +8801777123456
        </Text>
        <Image src={contactBG} alt="contact" className="detailContainer-img" />
      </div>
    </div>
  );
};

export default Contact;
