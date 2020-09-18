import React from "react";
import "../styles/SongRow.css";

function SongRow({ track, playSong }) {
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist, index) => artist.name).join(", ")}
          {" • "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
