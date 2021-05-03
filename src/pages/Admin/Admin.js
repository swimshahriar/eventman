import React, { useContext, useState } from "react";
import { Heading, Button } from "@chakra-ui/react";

//globalState
import { globalState } from "../../state/globalState";

// components
import Messaging from "../../components/Messaging/Messaging";
import AddBooking from "../../components/AddBooking/AddBooking";
import DashboardBooking from "../../components/DashboardBooking/DashboardBooking";

// styles
import "./Admin.css";

const Admin = () => {
  const { user } = useContext(globalState);
  const [selectedTab, setSelectedTab] = useState("AddBooking");

  const tabs = {
    Booking: <DashboardBooking user={user} />,
    Messaging: <Messaging />,
    AddBooking: <AddBooking />,
  };

  return (
    <div className="globalPadding dashboard">
      <Heading as="h1">Welcome, {user.email}</Heading>

      <div>
        <div className="dashboard__tab">
          <Button
            size="md"
            onClick={() => setSelectedTab("AddBooking")}
            className={`${
              selectedTab === "AddBooking" ? "dashboard__active-btn" : ""
            }`}
          >
            Add
          </Button>

          <Button
            size="md"
            onClick={() => setSelectedTab("Booking")}
            className={`${
              selectedTab === "Booking" ? "dashboard__active-btn" : ""
            }`}
          >
            Bookings
          </Button>

          <Button
            size="md"
            onClick={() => setSelectedTab("Messaging")}
            className={`${
              selectedTab === "Messaging" ? "dashboard__active-btn" : ""
            }`}
          >
            Messages
          </Button>
        </div>
        {tabs[selectedTab]}
      </div>
    </div>
  );
};

export default Admin;
