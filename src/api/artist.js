import axios from 'axios';
import { apiRoot } from './constants';
import Artist from '../models/artist';
import ArtistAlbums from '../models/artistAlbums';
import DetailsAPI from './artistDetails';

const artistRoot = `${apiRoot}artists/`;

const getAlbums = id =>
  axios
    .get(`${artistRoot}${id}/albums`)
    .then(({ data }) => ArtistAlbums.from(data.results));

const get = id =>
  axios.get(`${artistRoot}${id}`).then(({ data }) => {
    const promise1 = Artist.from(data.results[0]);
    const promise2 = DetailsAPI.get(data.results[0].artistName);
    return Promise.all([promise1, promise2]).then(values => values);
  });

export default {
  get,
  getAlbums
};
