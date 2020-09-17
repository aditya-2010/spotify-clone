import React from "react";
import { loginUrl } from "../spotify";
// import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      {/* login button */}
      <a href={loginUrl} className="login__button">
        LOGIN
      </a>
    </div>
  );
}

export default Login;
