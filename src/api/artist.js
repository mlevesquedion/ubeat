import axios from 'axios';
import { apiRoot } from './constants';
import Artist from '../models/artist';
import ArtistAlbums from '../models/artistAlbums';

const artistRoot = `${apiRoot}artists/`;

const get = id =>
  axios.get(`${artistRoot}${id}`).then(({ data }) => Artist.from(data));

const getAlbums = id =>
  axios
    .get(`${artistRoot}${id}/albums`)
    .then(({ data }) => ArtistAlbums.from(data));

export default {
  get,
  getAlbums
};
