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
          width: "300px",
          transition: "0.3s",
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

  // spotify:playlist:0AtrH0cbSnWKjYM98ACQYW

  // FIXME: id?

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: playlist.uri,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack.then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
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
          <PlayArrowIcon
            className="body__shuffle"
            onClick={() => playPlaylist(playlist.id)}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* list of songs */}
        {playlist?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;
