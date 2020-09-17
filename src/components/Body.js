import React, { useState } from "react";
import "../styles/Body.css";
import { useStateValue } from "./../StateProvider";
import Header from "./Header";
import SongRow from "./SongRow";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Body({ spotify }) {
  const [{ playlist }, dispatch] = useStateValue();
  const [toggle, setToggle] = useState("closed");

  const toggleSidebar = () => {
    if (toggle === "closed") {
      dispatch({
        type: "TOGGLE_SIDEBAR",
        style: {
          // backgroundColor: "#040404",
          // color: "white",
          // height: "100vh",
          width: "300px",
          transition: "0.3s",
          // width: "100%",
        },
      });
      setToggle("open");
    }

    if (toggle === "open") {
      dispatch({
        type: "TOGGLE_SIDEBAR",
        style: {
          transition: "0.2s",
        },
      });
      setToggle("closed");
    }
  };

  return (
    <div className="body">
      <button onClick={toggleSidebar} className="body__sidebarOpenButton">
        ☰
      </button>
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={playlist?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>New</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayArrowIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* list of songs */}
        {playlist?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
