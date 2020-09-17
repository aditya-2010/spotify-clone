import React from "react";
import "../styles/Footer.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://community.spotify.com/t5/image/serverpage/image-id/55829iC2AD64ADB887E2A5/image-size/large?v=1.0&px=999"
          alt=""
        />
        <div className="footer__songInfo">
          <h5>Valleys </h5>
          <p>Artist </p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon fontSize="small" className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayArrowIcon fontSize="large" className="footer__playIcon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon fontSize="small" className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
