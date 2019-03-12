import axios from 'axios';
import { apiRoot } from './constants';
import AlbumAPI from './album';
import Playlist from '../models/playlist';
import Track from '../models/track';

const playlistRoot = `${apiRoot}playlists/`;
const ownerEmail = 'utilisateur@gmail.com';

const api = {
  getUserPlaylists: () =>
    axios
      .get(`${playlistRoot}`, { params: { email: ownerEmail } })
      .then(({ data }) =>
        data.filter(p => p && p.owner && p.owner.email === ownerEmail)
      )
      .then(userPlaylists => userPlaylists.map(p => Playlist.from(p))),
  getPlaylistById: id =>
    axios.get(`${playlistRoot}${id}`).then(({ data }) => Playlist.from(data)),
  createPlaylist: name =>
    axios
      .post(`${playlistRoot}`, {
        name,
        owner: ownerEmail
      })
      .then(({ data }) => Playlist.from(data)),
  addTrackToPlaylist: (track, playlistId) =>
    axios.post(`${playlistRoot}${playlistId}/tracks`, Track.toBackend(track)),
  addAlbumToPlaylist: (albumId, playlistId) =>
    AlbumAPI.getAlbumTracks(albumId).then(tracks =>
      Promise.all(tracks.map(t => api.addTrackToPlaylist(t, playlistId)))
    ),
  delete: id => axios.delete(`${playlistRoot}${id}`),
  deleteTrack: (playlistId, trackId) =>
    axios.delete(`${playlistRoot}${playlistId}/tracks/${trackId}`)
};

export default api;
