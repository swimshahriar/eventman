import React, { useContext, useState } from "react";
import { Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

//globalState
import { globalState } from "../../state/globalState";

// components
import DashboardBooking from "../../components/DashboardBooking/DashboardBooking";

// styles
import "./UserDashboard.css";

const UserDashboard = () => {
  const { user } = useContext(globalState);
  const [selectedTab, setSelectedTab] = useState("Booking");
  const history = useHistory();

  return (
    <div className="globalPadding dashboard">
      <Heading as="h1">Welcome, {user.email}</Heading>

      <div>
        <div className="dashboard__tab">
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
            onClick={() => history.push(`/messages/${user.uid}`)}
          >
            Messages
          </Button>
        </div>
        {selectedTab === "Booking" && <DashboardBooking user={user} />}
      </div>
    </div>
  );
};

export default UserDashboard;
