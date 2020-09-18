import React from "react";
import "../styles/Sidebar.css";
import { useStateValue } from "./../StateProvider";
import SidebarOtion from "./SidebarOtion";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";

function Sidebar() {
  const [{ sidebar, playlists }] = useStateValue();

  return (
    <div className="sidebar" style={sidebar}>
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <SidebarOtion Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOtion Icon={SearchIcon} title="Search" />
      <SidebarOtion Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => (
        <SidebarOtion key={index} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
