import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Mood, AttachFile } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setroomName(snapshot.data().name);
        });
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed", input);
    // console.log("you typed",input);
    // console.log(e);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar></Avatar>
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen ...</p>
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
        <p className="chat_message">
          <span className="chat_name">Hardik</span>
          This is a message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_reciever chat_message">
          <span className="chat_name">Hardik</span>
          This is a message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Hardik</span>
          This is a message
          <span className="chat_timeStamp">{new Date().toUTCString()}</span>
        </p>
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
