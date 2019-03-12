import axios from 'axios';
import { apiRoot } from './constants';
import Album from '../models/album';
import AlbumTracks from '../models/albumTracks';

const albumRoot = `${apiRoot}albums/`;

const getAlbum = id =>
  axios
    .get(`${albumRoot}${id}`)
    .then(({ data }) => Album.from(data.results[0]));

const getAlbumTracks = id =>
  axios
    .get(`${albumRoot}${id}/tracks`)
    .then(({ data }) => AlbumTracks.from(data.results));

export default {
  getAlbum,
  getAlbumTracks
};
