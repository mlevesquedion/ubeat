import axios from 'axios';
import { apiRoot } from './constants';
import AlbumAPI from './album';
import Playlist from '../models/playlist';
import Headers from '../auth/headers';
import Track from '../models/track';
import userStore from '../userStore';

const playlistRoot = `${apiRoot}playlists/`;

const getUserPlaylists = () =>
  axios
    .get(`${playlistRoot}`, {
      ...Headers.auth(),
      params: { userId: userStore.id() }
    })
    .then(({ data }) => data.map(p => Playlist.fromBackend(p)));

const createPlaylist = name =>
  axios
    .post(
      `${playlistRoot}`,
      { name, owner: userStore.email() },
      { ...Headers.auth() }
    )
    .then(({ data }) => Playlist.fromBackend(data));

const addTrackToPlaylist = (track, playlistId) =>
  axios
    .post(`${playlistRoot}${playlistId}/tracks`, Track.toBackend(track), {
      ...Headers.auth()
    })
    .then(({ data }) => Playlist.fromBackend(data));

const addAlbumToPlaylist = (albumId, playlistId) =>
  AlbumAPI.getAlbumTracks(albumId).then(tracks =>
    Promise.all(tracks.map(t => addTrackToPlaylist(t, playlistId)))
  );

const deletePlaylist = id =>
  axios.delete(`${playlistRoot}${id}`, { ...Headers.auth() });

const deleteTrack = (playlistId, trackId) =>
  axios.delete(`${playlistRoot}${playlistId}/tracks/${trackId}`, {
    ...Headers.auth()
  });

const updatePlaylistName = (playlist, newName) =>
  axios
    .put(
      `${playlistRoot}${playlist.id}`,
      Playlist.toBackend({ ...playlist, name: newName }),
      { ...Headers.auth() }
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
