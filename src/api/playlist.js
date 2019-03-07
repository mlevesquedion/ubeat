import axios from 'axios';
import { apiRoot } from './constants';
import AlbumAPI from './album';

const playlistRoot = `${apiRoot}playlists/`;

const playlists = [{
  id: '5c813c94d6f63a0004c26543',
  name: 'Ma playlist'
}, {
  id: 'an-invalid-id',
  name: 'Chansons que mon chat aime'
}
];

const api = {
  getPlaylists: _id => new Promise((resolve, _reject) => resolve(playlists)),
  addSongToPlaylist: (song, playlistId) =>
    axios.post(`${playlistRoot}${playlistId}/tracks`, song, {
      headers: { 'Content-Type': 'application/json' }
    }),
  addAlbumToPlaylist:
    (albumId, playlistId) =>
      AlbumAPI.getAlbumTracks(albumId)
        .then(
          tracks =>
            Promise.all(
              tracks.map(t =>
                api.addSongToPlaylist(t, playlistId))))
};

export default api;
