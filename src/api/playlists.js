import axios from 'axios';
import { apiRoot } from './constants';
import AlbumAPI from './album';
import Playlist from '../models/playlist';

const playlistRoot = `${apiRoot}playlists/`;
const ownerEmail = 'utilisateur@gmail.com';

const api = {
  getUserPlaylists: () =>
    axios
      .get(`${playlistRoot}`)
      .then(({ data }) => data.filter(p => p.owner.email === ownerEmail))
      .then(userPlaylists => userPlaylists.map(Playlist.from)),
  getPlaylistById:
    id =>
      axios
        .get(`${playlistRoot}${id}`)
        .then(({ data }) => Playlist.from(data)),
  createPlaylist:
    name => axios.post(`${playlistRoot}`, {
      name, owner: ownerEmail
    }),
  addSongToPlaylist:
    (song, playlistId) =>
      axios.post(`${playlistRoot}${playlistId}/tracks`, song, {
        headers: { 'Content-Type': 'application/json' }
      }),
  addAlbumToPlaylist:
    (albumId, playlistId) => AlbumAPI.getAlbumTracks(albumId)
      .then(tracks =>
        Promise.all(tracks.map(t => api.addSongToPlaylist(t, playlistId))))
};

export default api;
