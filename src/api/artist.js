import axios from 'axios';
import { apiRoot } from './constants';
import Artist from '../models/artist';
import ArtistAlbums from '../models/artistAlbums';
import DetailArtist from '../models/detailArtist';

const artistRoot = `${apiRoot}artists/`;
const API_KEY = 'a8090a6b57c8d1fc53f6fdb6bd660e2b';

const get = id =>
  axios
    .get(`${artistRoot}${id}`)
    .then(({ data }) => Artist.from(data.results[0]));

const getAlbums = id =>
  axios
    .get(`${artistRoot}${id}/albums`)
    .then(({ data }) => ArtistAlbums.from(data.results));

const getDetails = artistName =>
  axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`
    )
    .then(({ data }) => DetailArtist.from(data.artist));

// const getAll = (id, name) => {
//   axios
//     .all([
//       axios.get(`${artistRoot}${id}`),
//       axios.get(
//         `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`
//       )
//     ])
//     .then(
//       axios.spread((ubeatRes, lastFmRes) => {
//         Artist.from(ubeatRes.data.results[0]);
//         DetailArtist.from(lastFmRes.data.artist);
//       })
//     );
// };

// const get = id =>
//   axios
//     .get(`${artistRoot}${id}`)
//     .then(({ data }) => {
//       Artist.from(data.results[0]);
//       return axios.get(
//         `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${
//           data.results[0].artistName
//         }&api_key=${API_KEY}&format=json`
//       );
//     })
//     .then(({ data }) => DetailArtist.from(data.artist));

export default {
  get,
  getAlbums,
  getDetails
};
