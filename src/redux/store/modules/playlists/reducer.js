const INITIAL_STATE = [];

export default function playlists(state, action) {
  switch (action.type) {
    case '@playlists/ADD_PLAYLISTS':
      return [...action.playlists];
    default:
      return INITIAL_STATE;
  }
}
