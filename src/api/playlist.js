import axios from 'axios';
import { apiRoot } from './constants';
import Playlist from '../models/playlist';
import AlbumAPI from './album';

const playlistRoot = `${apiRoot}playlists/`;

export default {
  getPlaylists: id =>
    axios
      .get(`${playlistRoot}${id}`)
      .then(({ data }) => Playlist.from(data)),
  addSongToPlaylist: (song, playlistId) =>
    axios.post(`${playlistRoot}${playlistId}/tracks`, song, {
      headers: { 'Content-Type': 'application/json' }
    }),
  addAlbumToPlaylist:
    (albumId, playlistId) =>
      AlbumAPI.getAlbumTracks(albumId)
        .then(
          tracks => Promise.all(
            tracks.map(t => this.addSongToPlaylist(t, playlistId))))
};
