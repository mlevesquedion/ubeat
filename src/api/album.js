import axios from 'axios';
import { apiRoot } from './constants';
import Album from '../models/album';

const albumRoot = `${apiRoot}albums/`;

export const getAlbum = id => (callBack, onError) => {
  axios
    .get(`${albumRoot}${id}`)
    .then(({ data }) => callBack(Album.from(data)))
    .catch(onError);
};

export const getAlbumTracks = id => axios.get(`${albumRoot}${id}/tracks`)
  .then(({ data }) => data.results);
