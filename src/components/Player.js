import React from "react";
import "../styles/Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <div className="player__footer">
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
