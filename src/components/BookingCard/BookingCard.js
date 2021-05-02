import React from "react";

const BookingCard = ({ info }) => {
  return (
    <div>
      <p>BookingId: {info.id}</p>
      <p>{info.userId}</p>
    </div>
  );
};

export default BookingCard;
