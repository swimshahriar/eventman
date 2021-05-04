import React, { useContext, useState, useEffect, useRef } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useParams, useHistory } from "react-router-dom";

// firestore
import { firestore } from "../../firebase";

// global state
import { globalState } from "../../state/globalState";

// styles
import "./Messages.css";

const Messages = () => {
  const { user } = useContext(globalState);
  const { groupId } = useParams();
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [groupLists, setGroupLists] = useState(null);
  const scrollRef = useRef();

  const isAdmin = user.email === "admin@eventman.com" ? true : false;

  // fetching list
  useEffect(() => {
    if (isAdmin) {
      firestore
        .collection("messages-groups")
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setGroupLists(documents);
        });
    }
  }, [isAdmin]);

  // send message
  const sendMessageHandler = () => {
    if (inputValue === "") {
      return alert("message cannot be empty!");
    }
    firestore.collection(`messages-${groupId}`).add({
      userId: user.uid,
      message: inputValue,
      email: user.email,
      createdAt: new Date(),
    });

    setInputValue("");
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // fetching messages
  const listRef = firestore.collection(`messages-${groupId}`);
  const query = listRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div className="messages globalPadding">
      <div className="messages__sidebar">
        <h4 className="messages__sidebar-title">Groups</h4>
        {isAdmin && groupLists ? (
          groupLists.map((list) => (
            <div
              className="messages__sidebar_group"
              key={list.userId}
              onClick={() => history.push(`/messages/${list.userId}`)}
            >
              <p>{list.email}</p>
            </div>
          ))
        ) : (
          <div className="messages__sidebar_group">
            <p>admin@eventman.com</p>
          </div>
        )}
      </div>
      <div className="messages__box">
        <h4 className="messages__box-title">Messages</h4>
        <div>
          <div className="messages__box-container">
            {messages &&
              messages.map((message, index) => (
                <div
                  className={`messages__box_message ${
                    user.uid === message.userId ? "sent" : "recieve"
                  }`}
                  key={index}
                >
                  <p>{message.message}</p>
                  <p>{message.email}</p>
                  <p>02:12 pm</p>
                </div>
              ))}
          </div>
          <div ref={scrollRef}></div>
        </div>

        <form>
          <Input
            value={inputValue}
            placeholder="type here..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={sendMessageHandler}>send</Button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
