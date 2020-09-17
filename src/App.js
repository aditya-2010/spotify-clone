import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, playlist, playlists }, dispatch] = useStateValue();
  // const [playl, setPlayl] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // clear the url for security reasons
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      // console.log(spotify);

      spotify.getMe().then((user) => {
        // console.log("USER >>>", user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        // setPlayl({ playlists });
        // console.log(playl);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      console.log("IN IF BLOCK >>>>>>>>>>>>>>", playlists);

      spotify.getPlaylist("0AtrH0cbSnWKjYM98ACQYW").then((response) =>
        dispatch({
          type: "SET_PLAYLIST",
          playlist: response,
        })
      );
    }
  }, []);

  // console.log("USER >>>", user);
  // console.log("TOKEN >>>", token);
  // console.log("PLAYLISTS >>>", playlists);
  // console.log("PLAYLIST >>>", playlist);
  // console.log(spotify);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}

      {/* <Login /> */}
    </div>
  );
}

export default App;
