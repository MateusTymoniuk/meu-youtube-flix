export function addPlaylists(playlists) {
  return {
    type: '@playlists/ADD_PLAYLISTS',
    playlists,
  };
}
