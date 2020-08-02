import axios from 'axios';

import youtubeApi from '../services/api';

async function getAllFromChannelId(channelId) {
  const response = await youtubeApi.get(
    `playlists?channelId=${channelId}&part=snippet&maxResults=2&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
  );
  if (response) {
    const { data: playlistResponse } = response;

    const playlistsItemsRequest = playlistResponse.items.map(
      (item) =>
        `playlistItems?playlistId=${item.id}&part=snippet&maxResults=5&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    );

    const playlistsRequests = playlistsItemsRequest.map((item) =>
      youtubeApi.get(item)
    );

    return axios.all([...playlistsRequests]).then((responses) => {
      const playlistItemsResponse = responses.map(
        (playlistItemTemp) => playlistItemTemp.data
      );

      return playlistResponse.items.map((item, index) => ({
        id: item.id,
        titulo: item.snippet.title,
        videos: [
          ...playlistItemsResponse[index].items.map((playlistItem) => ({
            titulo: playlistItem.snippet.title,
            url: `https://www.youtube.com/watch?v=${playlistItem.snippet.resourceId.videoId}`,
          })),
        ],
      }));
    });
  }
  return [];
}

export default {
  getAllFromChannelId,
};
