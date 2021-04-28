import React from "react";
import { Heading } from "@chakra-ui/react";

//styles
import "./Booking.css";

const Booking = ({ item }) => {
  return (
    <div className="booking">
      <img src={item.imgUrl} alt={item.title} />
      <div>
        <Heading as="h6" className="booking__title">
          {item.title}
        </Heading>
        <div className="booking__details">
          <p>Venue: {item.venue}</p>
          <p>Category: {item.category}</p>
          <p>Price: {item.price} Tk</p>
        </div>
        <p className="booking__desc">Description: {item.desc}</p>
      </div>
    </div>
  );
};

export default Booking;
