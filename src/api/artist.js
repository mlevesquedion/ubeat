import axios from 'axios';
import { apiRoot } from './constants';
import Artist from '../models/artist';
import ArtistAlbums from '../models/artistAlbums';

const artistRoot = `${apiRoot}artists/`;

export const getArtist = (id, callBack, onError) => {
  axios
    .get(`${artistRoot}${id}`)
    .then(({ data }) => callBack(Artist.from(data)))
    .catch(onError);
};

export const getArtistAlbums = (id, callBack, onError) => {
  axios
    .get(`${artistRoot}${id}/albums`)
    .then(({ data }) => callBack(ArtistAlbums.from(data)))
    .catch(onError);
};
