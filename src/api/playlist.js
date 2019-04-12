import axios from 'axios';
import apiRoot from './apiRoot';
import AlbumAPI from './album';
import Playlist from '../models/playlist';
import Headers from '../auth/headers';
import Track from '../models/track';
import userStore from '../userStore';

const playlistRoot = `${apiRoot}playlists/`;

const getPlaylists = id =>
  axios
    .get(`${playlistRoot}`, {
      ...Headers.auth(),
      params: { userId: id }
    })
    .then(({ data }) => data.map(p => Playlist.fromBackend(p)));

const getUserPlaylists = () => getPlaylists(userStore.id());

const createPlaylist = name =>
  axios
    .post(`${playlistRoot}`, { name, owner: userStore.email() }, Headers.auth())
    .then(({ data }) => Playlist.fromBackend(data));

const addTrackToPlaylist = (track, playlistId) =>
  axios
    .post(
      `${playlistRoot}${playlistId}/tracks`,
      Track.toBackend(track),
      Headers.auth()
    )
    .then(({ data }) => Playlist.fromBackend(data));

const addTracksToPlaylist = (tracks, playlistId) =>
  Promise.all(tracks.map(t => addTrackToPlaylist(t, playlistId)));

const addAlbumToPlaylist = (albumId, playlistId) =>
  AlbumAPI.getAlbumTracks(albumId).then(tracks =>
    addTracksToPlaylist(tracks, playlistId)
  );

const deletePlaylist = id =>
  axios.delete(`${playlistRoot}${id}`, Headers.auth());

const deleteTrack = (playlistId, trackId) =>
  axios.delete(
    `${playlistRoot}${playlistId}/tracks/${trackId}`,
    Headers.auth()
  );

const updatePlaylistName = (playlist, newName) =>
  axios
    .put(
      `${playlistRoot}${playlist.id}`,
      Playlist.toBackend({ ...playlist, name: newName }),
      Headers.auth()
    )
    .then(({ data }) => data);

const stealPlaylist = playlist =>
  createPlaylist(playlist.name).then(p =>
    addTracksToPlaylist(playlist.tracks, p.id)
  );

const api = {
  getPlaylists,
  getUserPlaylists,
  createPlaylist,
  addTrackToPlaylist,
  addAlbumToPlaylist,
  deletePlaylist,
  deleteTrack,
  updatePlaylistName,
  stealPlaylist
};

export default api;
