import React from "react";
import "./SideBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from "./SideBarChat";
// import SideBarHeader from "./SideBarHeader";

function SideBar() {
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
        <SideBarChat></SideBarChat>
      </div>
    </div>
  );
}

export default SideBar;
