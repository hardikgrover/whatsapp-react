import { Avatar } from "@material-ui/core";
import React from "react";
import db from "./firebase";
import "./SideBarChat.css";
function SideBarChat({ key, id, name, addNewChat }) {
  const createChat = () => {
    const roomName = prompt("please enter name for chat room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar></Avatar>
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>This is the last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h3 className="add-new-chat-title">Add New Chat</h3>
    </div>
  );
}

export default SideBarChat;
