import axios from 'axios';
import { apiRoot } from './constants';
import Playlist from '../models/playlist';
import { getAlbumTracks } from './album';

const playlistRoot = `${apiRoot}playlists/`;

export const getPlaylist = id => (callBack, onError) => {
  axios
    .get(`${playlistRoot}${id}`)
    .then(({ data }) => callBack(Playlist.from(data)))
    .catch(onError);
};

export const addSongToPlaylist = (song, playlistId) =>
  axios.post(`${playlistRoot}${playlistId}/tracks`, song, {
    headers: { 'Content-Type': 'application/json' }
  });

export const addAlbumToPlaylist = (albumId, playlistId) =>
  getAlbumTracks(albumId)
    .then(
      tracks => Promise.all(
        tracks.map(t => addSongToPlaylist(t, playlistId))));
