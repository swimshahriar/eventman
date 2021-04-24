import React, { useContext } from "react";

//globalState
import { globalState } from "../state/globalState";

const UserDashboard = () => {
  const { user } = useContext(globalState);
  return <div>User Dashboard</div>;
};

export default UserDashboard;
