import axios from 'axios';
import { apiRoot } from './constants';
import Album from '../models/album';
import AlbumTracks from '../models/albumTracks';

const albumRoot = `${apiRoot}albums/`;

export const getAlbum = (id, callBack, onError) => {
  axios
    .get(`${albumRoot}${id}`)
    .then(({ data }) => callBack(Album.from(data)))
    .catch(onError);
};

export const getAlbumTracks = (id, callBack, onError) => {
  axios
    .get(`${albumRoot}${id}/tracks`)
    .then(({ data }) => callBack(AlbumTracks.from(data)))
    .catch(onError);
};
