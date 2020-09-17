export const initialState = {
  // remove later
  token: null,
  // "BQBQ82Lam6DzpI_Ch6JALBkiPg6yBosy1ttzykFyM8Q3yqXQHv9f1TmlMLgMFG6kEvNAir6sSI8Etzzq5JRQPKiHPsGPUKkpgck46LfOqWGdTzeAttdOqruFvH3n_O3283XRUXnnbqehwKCoa7In_8c-a_Kaod389oTh0T2YoFbKYEEX",
  user: null,
  playlists: {},
  playlist: null,
  playing: false,
  item: null,
  sidebar: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: action.style,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    default:
      return state;
  }
};
