import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { InsertEmoticon, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Mood, AttachFile } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar></Avatar>
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
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
      </div>
    </div>
  );
}

export default Chat;
