import React, { useContext } from "react";
import { Select } from "@chakra-ui/react";

// firestore
import { firestore } from "../../firebase";

// global state
import { globalState } from "../../state/globalState";

// styles
import "./BookingCard.css";

const BookingCard = ({ info }) => {
  const { user } = useContext(globalState);
  const isAdmin = user.email === "admin@eventman.com" ? true : false;

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

      {isAdmin && (
        <div>
          <Select
            placeholder="select a option"
            size="lg"
            isRequired
            onChange={(e) => {
              firestore
                .collection("confirmBookings")
                .doc(info.id)
                .update({ status: e.target.value });
            }}
          >
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="canceled">Canceled</option>
          </Select>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
