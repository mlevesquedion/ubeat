import axios from 'axios';
import { apiRoot } from './constants';
import AlbumAPI from './album';
import Playlist from '../models/playlist';
import Track from '../models/track';

const playlistRoot = `${apiRoot}playlists/`;
// FIXME
const ownerEmail = 'utilisateur3@gmail.com';
// Password is 'asdfasdfasdf'
const userId = '5c9d31a5ea03fd0004c27ff0';

const getUserPlaylists = () =>
  axios
    .get(`${playlistRoot}`, { params: { userId } })
    .then(({ data }) =>
      data.filter(p => p && p.owner && p.owner.email === ownerEmail)
    )
    .then(userPlaylists => userPlaylists.map(p => Playlist.fromBackend(p)));

const createPlaylist = name =>
  axios
    .post(`${playlistRoot}`, {
      name,
      owner: ownerEmail
    })
    .then(({ data }) => Playlist.fromBackend(data));

const addTrackToPlaylist = (track, playlistId) =>
  axios
    .post(`${playlistRoot}${playlistId}/tracks`, Track.toBackend(track))
    .then(({ data }) => Playlist.fromBackend(data));

const addAlbumToPlaylist = (albumId, playlistId) =>
  AlbumAPI.getAlbumTracks(albumId).then(tracks =>
    Promise.all(tracks.map(t => addTrackToPlaylist(t, playlistId)))
  );

const deletePlaylist = id => axios.delete(`${playlistRoot}${id}`);

const deleteTrack = (playlistId, trackId) =>
  axios.delete(`${playlistRoot}${playlistId}/tracks/${trackId}`);

const updatePlaylistName = (playlist, newName) =>
  axios
    .put(
      `${playlistRoot}${playlist.id}`,
      Playlist.toBackend({ ...playlist, name: newName })
    )
    .then(({ data }) => data);

const api = {
  getUserPlaylists,
  createPlaylist,
  addTrackToPlaylist,
  addAlbumToPlaylist,
  deletePlaylist,
  deleteTrack,
  updatePlaylistName
};

export default api;
