import axios from 'axios';
import { apiRoot } from './constants';
import AlbumAPI from './album';
import Playlist from '../models/playlist';
import Track from '../models/track';

const playlistRoot = `${apiRoot}playlists/`;
const ownerEmail = 'utilisateur@gmail.com';

const getUserPlaylists = () =>
  axios
    .get(`${playlistRoot}`, { params: { email: ownerEmail } })
    .then(({ data }) =>
      data.filter(p => p && p.owner && p.owner.email === ownerEmail)
    )
    .then(userPlaylists => userPlaylists.map(p => Playlist.from(p)));

const createPlaylist = name =>
  axios
    .post(`${playlistRoot}`, {
      name,
      owner: ownerEmail
    })
    .then(({ data }) => Playlist.from(data));

const addTrackToPlaylist = (track, playlistId) =>
  axios.post(`${playlistRoot}${playlistId}/tracks`, Track.toBackend(track));

const addAlbumToPlaylist = (albumId, playlistId) =>
  AlbumAPI.getAlbumTracks(albumId).then(tracks =>
    Promise.all(tracks.map(t => addTrackToPlaylist(t, playlistId)))
  );

const deletePlaylist = id => axios.delete(`${playlistRoot}${id}`);

const deleteTrack = (playlistId, trackId) =>
  axios.delete(`${playlistRoot}${playlistId}/tracks/${trackId}`);

const api = {
  getUserPlaylists,
  createPlaylist,
  addTrackToPlaylist,
  addAlbumToPlaylist,
  deletePlaylist,
  deleteTrack
};

export default api;
