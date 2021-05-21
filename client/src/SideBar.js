import React, { useEffect, useState } from "react";
import "./SideBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from "./SideBarChat";
import db from "./firebase";
// import SideBarHeader from "./SideBarHeader";

function SideBar() {
  // console.log("Re rendered!!!");

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // console.log(rooms);
  // console.log(rooms[0].data.name);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://i.pinimg.com/originals/c5/68/3a/c5683a88f3d5a8708208e4ccd694bf50.jpg" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined></SearchOutlined>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chat">
        <SideBarChat addNewChat />
        {rooms.map((room) => {
          // console.log(room.data.name);
          return (
            <SideBarChat key={room.id} id={room.id} name={room.data.name} />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
