import React from "react";

// styles
import "./BookingCard.css";

const BookingCard = ({ info }) => {
  return (
    <div className="booking-card">
      <h4>
        <span>BookingId:</span> {info.id}
      </h4>
      <p>
        <span>Status:</span> {info.status}
      </p>
      <p>
        <span>Email:</span> {info.userEmail}
      </p>
      <p>
        <span>Title:</span> {info.title}
      </p>
      <p>
        <span>Category:</span> {info.category}
      </p>
      <p>
        <span>Event Date:</span> {info.date.toDate().toString()}
      </p>
      <p>
        <span>Confirmed at:</span> {info.createdAt}
      </p>
      <p>
        <span>Description:</span> {info.desc}
      </p>
      <p>
        <span>Price:</span> {info.price} Tk
      </p>
    </div>
  );
};

export default BookingCard;
