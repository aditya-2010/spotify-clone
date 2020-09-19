export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-ec5b4.web.app/";

const clientId = "07f989fc49504493a260a61805abb6dc";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-top-read",
  "user-read-recently-played",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
