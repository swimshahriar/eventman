import React from "react";

// styles
import "./Messages.css";

const Messages = () => {
  return (
    <div className="messages globalPadding">
      <div className="messages__sidebar">
        <h4 className="messages__sidebar-title">Groups</h4>
        <div className="messages__sidebar_group">
          <p>Messages-mID</p>
        </div>
      </div>
      <div className="messages__box">
        <h4 className="messages__box-title">Messages</h4>
        <div className="messages__box_message">
          <p>message</p>
          <p>{new Date().toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
