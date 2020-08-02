import axios from 'axios';

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  // baseURL: 'http://localhost:3333',
});

export default youtubeApi;
