import axios from 'axios';
import apiRoot from './apiRoot';
import Artist from '../models/artist';
import ArtistAlbums from '../models/artistAlbums';
import Headers from '../auth/headers';

const artistRoot = `${apiRoot}artists/`;

const get = id =>
  axios
    .get(`${artistRoot}${id}`, Headers.auth())
    .then(({ data }) => Artist.from(data.results[0]));

const getAlbums = id =>
  axios
    .get(`${artistRoot}${id}/albums`, Headers.auth())
    .then(({ data }) => ArtistAlbums.from(data.results));

export default {
  get,
  getAlbums
};
