import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Mood, AttachFile } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const a = [1, 2, 35];
  // console.log(a);
  console.log(messages);

  // a.map((b) => {
  //   b += 2;
  // });
  // console.log(a);

  // console.log(typeof messages);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomName(snapshot.data().name);
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
      console.log(messages);
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed", input);
    // console.log("you typed",input);
    // console.log(e);
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar></Avatar>
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>
            {" "}
            Last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {/* {messages.map((message) => {
          <p>message.name</p>;
        })} */}
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name == user.displayName && "chat_receiver"
            }`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timeStamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticon></InsertEmoticon>
        <form onSubmit={sendMessage} className="chat_footer_details">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              // console.log(e.target);
            }}
            className="chat_input"
            placeholder="Type a message"
            type="text"
          />
          {/* <button onClick={sendMessage} type="submit">
            Send a message
          </button> */}
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default Chat;
