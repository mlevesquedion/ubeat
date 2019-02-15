import axios from 'axios';
import { apiRoot } from './constants';

const artistRoot = `${apiRoot}artists/`;

export const getArtist = (id, callBack, onError) => {
  axios
    .get(`${artistRoot}${id}`)
    .then(({ data }) => callBack(data.results[0]))
    .catch(onError);
};

export const getArtistAlbums = (id, callBack, onError) => {
  axios
    .get(`${artistRoot}${id}/albums`)
    .then(({ data }) => callBack(data.results))
    .catch(onError);
};
