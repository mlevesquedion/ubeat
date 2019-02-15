import { apiRoot } from './constants';

const artistRoot = apiRoot + 'artists/';

const getArtist = (id, callBack) => {
  axios.get(artistRoot + id).then(callBack);
};

const getArtistAlbums = (id, callBack) => {
  axios.get(artistRoot + id + '/albums').then(callBack);
};
