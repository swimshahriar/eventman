import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

// firestrore
import { firestore } from "../../firebase";

// components
import BookingCard from "../BookingCard/BookingCard";

const DashboardBooking = ({ user }) => {
  const [lists, setLists] = useState([]);
  const { uid, email } = user;

  // fetching list
  useEffect(() => {
    let unsub;

    if (email === "admin@eventman.com") {
      unsub = firestore
        .collection("confirmBookings")
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setLists(documents);
        });
    }
    unsub = firestore
      .collection("confirmBookings")
      .where("userId", "==", `${uid}`)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setLists(documents);
      });
    return () => unsub();
  }, [uid, email]);

  return (
    <div>
      <Heading as="h2">Booking Lists</Heading>
      {lists &&
        lists.map((item) => {
          return <BookingCard key={item.id} info={item} />;
        })}
    </div>
  );
};

export default DashboardBooking;
