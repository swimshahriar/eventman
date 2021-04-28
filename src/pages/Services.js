import React from "react";
import { Heading } from "@chakra-ui/layout";
import { useCollectionData } from "react-firebase-hooks/firestore";

// firestore
import { firestore } from "../firebase";
import Booking from "../components/Booking/Booking";

// components

const Services = () => {
  // fetching list
  const listRef = firestore.collection("bookings");
  const query = listRef.orderBy("createdAt");

  const [lists] = useCollectionData(query, { idField: "id" });
  return (
    <div className="globalPadding">
      <Heading as="h2" m="10" textAlign="center">
        Services
      </Heading>

      <div className="services" style={{ textAlign: "center" }}>
        {lists && lists.map((item) => <Booking key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Services;
