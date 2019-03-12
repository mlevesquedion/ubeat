import axios from 'axios';
import { apiRoot } from './constants';
import Artist from '../models/artist';
import ArtistAlbums from '../models/artistAlbums';

const artistRoot = `${apiRoot}artists/`;

export default {
  get: id =>
    axios.get(`${artistRoot}${id}`).then(({ data }) => Artist.from(data)),
  getAlbums: id =>
    axios
      .get(`${artistRoot}${id}/albums`)
      .then(({ data }) => ArtistAlbums.from(data))
};
