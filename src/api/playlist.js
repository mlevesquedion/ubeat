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
    (albumId, playlistId) => AlbumAPI.getAlbumTracks(albumId)
      .then(tracks =>
        Promise.all(tracks.map(t => api.addSongToPlaylist(t, playlistId))))
};

export default api;

const oldCode = `import axios from 'axios';
import { apiRoot } from './constants';
import Playlist from '../models/playlist';

const playlistRoot = `;${apiRoot}
playlists / `;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
};
const ownerEmail = 'utilisateur@gmail.com';

export const getPlaylist = id => (callBack, onError) => {
  axios
    .get(`${playlistRoot}${id}`)
    .then(({ data }) => callBack(Playlist.from(data)))
    .catch(onError);
};

export const getUserPlaylists = (callBack, onError) => {
  axios
    .get(`${playlistRoot}`)
    .then(({ data }) => data.filter(p => p.owner.email === ownerEmail))
    .then(userPlaylists => callBack(userPlaylists))

    .catch(onError);
};

export const postPlaylist = (callBack, onError) => {
  axios
    .post(`${playlistRoot}`, { name: 'unePlaylist513513463', owner: ownerEmail }, axiosConfig)
    .then(({ data }) => callBack(Playlist.from(data)))
    .catch(onError);
};
`;
